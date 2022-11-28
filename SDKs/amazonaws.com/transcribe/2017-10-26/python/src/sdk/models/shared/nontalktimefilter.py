from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NonTalkTimeFilter:
    r"""NonTalkTimeFilter
    An object that enables you to configure your category to be applied to call analytics jobs where either the customer or agent was interrupted.
    """
    
    absolute_time_range: Optional[AbsoluteTimeRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AbsoluteTimeRange') }})
    negate: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Negate') }})
    relative_time_range: Optional[RelativeTimeRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RelativeTimeRange') }})
    threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Threshold') }})
    
