from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import completeworkflowexecutionfailedcause_enum


@dataclass_json
@dataclass
class CompleteWorkflowExecutionFailedEventAttributes:
    cause: completeworkflowexecutionfailedcause_enum.CompleteWorkflowExecutionFailedCauseEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cause' }})
    decision_task_completed_event_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'decisionTaskCompletedEventId' }})
    
