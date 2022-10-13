from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import workflowexecutiontimeouttype_enum
from . import workflowexecution
from . import workflowtype


@dataclass_json
@dataclass
class ChildWorkflowExecutionTimedOutEventAttributes:
    initiated_event_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initiatedEventId' }})
    started_event_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startedEventId' }})
    timeout_type: workflowexecutiontimeouttype_enum.WorkflowExecutionTimeoutTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeoutType' }})
    workflow_execution: workflowexecution.WorkflowExecution = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workflowExecution' }})
    workflow_type: workflowtype.WorkflowType = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workflowType' }})
    
