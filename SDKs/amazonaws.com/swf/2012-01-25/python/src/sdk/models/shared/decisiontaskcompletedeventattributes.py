from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DecisionTaskCompletedEventAttributes:
    execution_context: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionContext' }})
    scheduled_event_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduledEventId' }})
    started_event_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startedEventId' }})
    
