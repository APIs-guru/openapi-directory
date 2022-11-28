from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ChildWorkflowExecutionStartedEventAttributes:
    r"""ChildWorkflowExecutionStartedEventAttributes
    Provides the details of the <code>ChildWorkflowExecutionStarted</code> event.
    """
    
    initiated_event_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('initiatedEventId') }})
    workflow_execution: WorkflowExecution = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflowExecution') }})
    workflow_type: WorkflowType = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflowType') }})
    
