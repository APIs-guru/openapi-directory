from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import workflowexecution
from . import workflowtype


@dataclass_json
@dataclass
class ChildWorkflowExecutionStartedEventAttributes:
    initiated_event_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initiatedEventId' }})
    workflow_execution: workflowexecution.WorkflowExecution = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workflowExecution' }})
    workflow_type: workflowtype.WorkflowType = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workflowType' }})
    
