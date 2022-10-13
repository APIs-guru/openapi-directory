from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import featuretype_enum


@dataclass_json
@dataclass
class FeatureDefinition:
    feature_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeatureName' }})
    feature_type: Optional[featuretype_enum.FeatureTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeatureType' }})
    
