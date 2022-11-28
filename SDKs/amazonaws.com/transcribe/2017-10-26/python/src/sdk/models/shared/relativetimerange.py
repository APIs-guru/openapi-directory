from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RelativeTimeRange:
    r"""RelativeTimeRange
    An object that allows percentages to specify the proportion of the call where you would like to apply a filter. For example, you can specify the first half of the call. You can also specify the period of time between halfway through to three-quarters of the way through the call. Because the length of conversation can vary between calls, you can apply relative time ranges across all calls. 
    """
    
    end_percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndPercentage') }})
    first: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('First') }})
    last: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Last') }})
    start_percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartPercentage') }})
    
