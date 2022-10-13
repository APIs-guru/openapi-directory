from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import decisiontasktimeouttype_enum


@dataclass_json
@dataclass
class DecisionTaskTimedOutEventAttributes:
    scheduled_event_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduledEventId' }})
    started_event_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startedEventId' }})
    timeout_type: decisiontasktimeouttype_enum.DecisionTaskTimeoutTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeoutType' }})
    
