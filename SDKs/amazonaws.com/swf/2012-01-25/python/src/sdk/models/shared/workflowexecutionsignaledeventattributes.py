from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import workflowexecution


@dataclass_json
@dataclass
class WorkflowExecutionSignaledEventAttributes:
    external_initiated_event_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalInitiatedEventId' }})
    external_workflow_execution: Optional[workflowexecution.WorkflowExecution] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalWorkflowExecution' }})
    input: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'input' }})
    signal_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signalName' }})
    
