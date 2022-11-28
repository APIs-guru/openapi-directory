from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ChildWorkflowExecutionTimedOutEventAttributes:
    r"""ChildWorkflowExecutionTimedOutEventAttributes
    Provides the details of the <code>ChildWorkflowExecutionTimedOut</code> event.
    """
    
    initiated_event_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('initiatedEventId') }})
    started_event_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startedEventId') }})
    timeout_type: WorkflowExecutionTimeoutTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeoutType') }})
    workflow_execution: WorkflowExecution = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflowExecution') }})
    workflow_type: WorkflowType = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflowType') }})
    
