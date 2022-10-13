from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import workflowexecution
from . import workflowtype


@dataclass_json
@dataclass
class ChildWorkflowExecutionFailedEventAttributes:
    details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'details' }})
    initiated_event_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initiatedEventId' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    started_event_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startedEventId' }})
    workflow_execution: workflowexecution.WorkflowExecution = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workflowExecution' }})
    workflow_type: workflowtype.WorkflowType = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workflowType' }})
    
