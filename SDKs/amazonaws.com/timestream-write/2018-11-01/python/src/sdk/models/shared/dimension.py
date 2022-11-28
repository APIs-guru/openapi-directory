from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Dimension:
    r"""Dimension
    Dimension represents the meta data attributes of the time series. For example, the name and availability zone of an EC2 instance or the name of the manufacturer of a wind turbine are dimensions. 
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    dimension_value_type: Optional[DimensionValueTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DimensionValueType') }})
    
