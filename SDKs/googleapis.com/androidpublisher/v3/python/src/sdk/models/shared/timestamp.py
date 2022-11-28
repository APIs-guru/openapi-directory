from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Timestamp:
    r"""Timestamp
    A Timestamp represents a point in time independent of any time zone or local calendar, encoded as a count of seconds and fractions of seconds at nanosecond resolution. The count is relative to an epoch at UTC midnight on January 1, 1970.
    """
    
    nanos: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nanos') }})
    seconds: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seconds') }})
    
