from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import startchildworkflowexecutionfailedcause_enum
from . import workflowtype


@dataclass_json
@dataclass
class StartChildWorkflowExecutionFailedEventAttributes:
    cause: startchildworkflowexecutionfailedcause_enum.StartChildWorkflowExecutionFailedCauseEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cause' }})
    control: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'control' }})
    decision_task_completed_event_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'decisionTaskCompletedEventId' }})
    initiated_event_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initiatedEventId' }})
    workflow_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workflowId' }})
    workflow_type: workflowtype.WorkflowType = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workflowType' }})
    
