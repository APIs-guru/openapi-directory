from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Rate:
    r"""Rate
    This complex type defines a &quot;rate&quot; as the quota of calls that can be made to a resource per time window, the remaining number of calls before the threshold is met, the amount of time until the time window resets, and the length of the time window (in seconds).
    """
    
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    remaining: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remaining') }})
    reset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reset') }})
    time_window: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeWindow') }})
    
