from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HyperParameterSpecification:
    r"""HyperParameterSpecification
    Defines a hyperparameter to be used by an algorithm.
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    type: ParameterTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    default_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultValue') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    is_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsRequired') }})
    is_tunable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsTunable') }})
    range: Optional[ParameterRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Range') }})
    
