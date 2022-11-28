from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RejectedLogEventsInfo:
    r"""RejectedLogEventsInfo
    Represents the rejected events.
    """
    
    expired_log_event_end_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiredLogEventEndIndex') }})
    too_new_log_event_start_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tooNewLogEventStartIndex') }})
    too_old_log_event_end_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tooOldLogEventEndIndex') }})
    
