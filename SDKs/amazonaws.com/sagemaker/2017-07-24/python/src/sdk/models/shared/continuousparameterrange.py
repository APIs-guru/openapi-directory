from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ContinuousParameterRange:
    r"""ContinuousParameterRange
    A list of continuous hyperparameters to tune.
    """
    
    max_value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxValue') }})
    min_value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinValue') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    scaling_type: Optional[HyperParameterScalingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalingType') }})
    
