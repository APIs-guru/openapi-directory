from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import schedulelambdafunctionfailedcause_enum


@dataclass_json
@dataclass
class ScheduleLambdaFunctionFailedEventAttributes:
    cause: schedulelambdafunctionfailedcause_enum.ScheduleLambdaFunctionFailedCauseEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cause' }})
    decision_task_completed_event_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'decisionTaskCompletedEventId' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
