from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FeatureDefinition:
    r"""FeatureDefinition
    A list of features. You must include <code>FeatureName</code> and <code>FeatureType</code>. Valid feature <code>FeatureType</code>s are <code>Integral</code>, <code>Fractional</code> and <code>String</code>. 
    """
    
    feature_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeatureName') }})
    feature_type: Optional[FeatureTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeatureType') }})
    
