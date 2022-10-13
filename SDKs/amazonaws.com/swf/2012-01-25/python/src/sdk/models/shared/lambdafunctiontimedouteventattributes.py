from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import lambdafunctiontimeouttype_enum


@dataclass_json
@dataclass
class LambdaFunctionTimedOutEventAttributes:
    scheduled_event_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduledEventId' }})
    started_event_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startedEventId' }})
    timeout_type: Optional[lambdafunctiontimeouttype_enum.LambdaFunctionTimeoutTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeoutType' }})
    
