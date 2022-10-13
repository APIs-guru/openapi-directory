from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FeatureValue:
    feature_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeatureName' }})
    value_as_string: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValueAsString' }})
    
