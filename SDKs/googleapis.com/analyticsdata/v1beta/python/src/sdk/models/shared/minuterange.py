from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MinuteRange:
    r"""MinuteRange
    A contiguous set of minutes: startMinutesAgo, startMinutesAgo + 1, ..., endMinutesAgo. Requests are allowed up to 2 minute ranges.
    """
    
    end_minutes_ago: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endMinutesAgo') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    start_minutes_ago: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startMinutesAgo') }})
    
