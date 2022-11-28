from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FeatureValue:
    r"""FeatureValue
    The value associated with a feature.
    """
    
    feature_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeatureName') }})
    value_as_string: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValueAsString') }})
    
