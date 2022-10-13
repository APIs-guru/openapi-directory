from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import rejectedlogeventsinfo


@dataclass_json
@dataclass
class PutLogEventsResponse:
    next_sequence_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextSequenceToken' }})
    rejected_log_events_info: Optional[rejectedlogeventsinfo.RejectedLogEventsInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rejectedLogEventsInfo' }})
    
