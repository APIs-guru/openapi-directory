from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AbsoluteTimeRange:
    r"""AbsoluteTimeRange
    A time range, set in seconds, between two points in the call.
    """
    
    end_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndTime') }})
    first: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('First') }})
    last: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Last') }})
    start_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartTime') }})
    
