from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import cancelworkflowexecutionfailedcause_enum


@dataclass_json
@dataclass
class CancelWorkflowExecutionFailedEventAttributes:
    cause: cancelworkflowexecutionfailedcause_enum.CancelWorkflowExecutionFailedCauseEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cause' }})
    decision_task_completed_event_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'decisionTaskCompletedEventId' }})
    
