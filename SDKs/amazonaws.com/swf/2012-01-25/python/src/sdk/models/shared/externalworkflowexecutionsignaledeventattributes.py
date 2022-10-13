from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import workflowexecution


@dataclass_json
@dataclass
class ExternalWorkflowExecutionSignaledEventAttributes:
    initiated_event_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initiatedEventId' }})
    workflow_execution: workflowexecution.WorkflowExecution = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workflowExecution' }})
    
