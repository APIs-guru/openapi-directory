from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import workflowexecutioncancelrequestedcause_enum
from . import workflowexecution


@dataclass_json
@dataclass
class WorkflowExecutionCancelRequestedEventAttributes:
    cause: Optional[workflowexecutioncancelrequestedcause_enum.WorkflowExecutionCancelRequestedCauseEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cause' }})
    external_initiated_event_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalInitiatedEventId' }})
    external_workflow_execution: Optional[workflowexecution.WorkflowExecution] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalWorkflowExecution' }})
    
