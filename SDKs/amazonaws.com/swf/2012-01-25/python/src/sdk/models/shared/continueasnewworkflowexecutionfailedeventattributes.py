from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import continueasnewworkflowexecutionfailedcause_enum


@dataclass_json
@dataclass
class ContinueAsNewWorkflowExecutionFailedEventAttributes:
    cause: continueasnewworkflowexecutionfailedcause_enum.ContinueAsNewWorkflowExecutionFailedCauseEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cause' }})
    decision_task_completed_event_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'decisionTaskCompletedEventId' }})
    
