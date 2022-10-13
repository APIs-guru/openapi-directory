from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RejectedLogEventsInfo:
    expired_log_event_end_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiredLogEventEndIndex' }})
    too_new_log_event_start_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tooNewLogEventStartIndex' }})
    too_old_log_event_end_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tooOldLogEventEndIndex' }})
    
