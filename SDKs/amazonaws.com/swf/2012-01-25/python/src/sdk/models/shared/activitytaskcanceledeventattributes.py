from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ActivityTaskCanceledEventAttributes:
    details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'details' }})
    latest_cancel_requested_event_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestCancelRequestedEventId' }})
    scheduled_event_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduledEventId' }})
    started_event_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startedEventId' }})
    
