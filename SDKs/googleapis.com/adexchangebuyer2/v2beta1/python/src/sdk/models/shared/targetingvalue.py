from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TargetingValue:
    r"""TargetingValue
    A polymorphic targeting value used as part of Shared Targeting.
    """
    
    creative_size_value: Optional[CreativeSize] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeSizeValue') }})
    day_part_targeting_value: Optional[DayPartTargeting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dayPartTargetingValue') }})
    long_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longValue') }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringValue') }})
    
