from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import startlambdafunctionfailedcause_enum


@dataclass_json
@dataclass
class StartLambdaFunctionFailedEventAttributes:
    cause: Optional[startlambdafunctionfailedcause_enum.StartLambdaFunctionFailedCauseEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cause' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    scheduled_event_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduledEventId' }})
    
