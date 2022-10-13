from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import activitytasktimeouttype_enum


@dataclass_json
@dataclass
class ActivityTaskTimedOutEventAttributes:
    details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'details' }})
    scheduled_event_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduledEventId' }})
    started_event_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startedEventId' }})
    timeout_type: activitytasktimeouttype_enum.ActivityTaskTimeoutTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeoutType' }})
    
