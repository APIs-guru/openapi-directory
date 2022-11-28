from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExternalWorkflowExecutionCancelRequestedEventAttributes:
    r"""ExternalWorkflowExecutionCancelRequestedEventAttributes
    Provides the details of the <code>ExternalWorkflowExecutionCancelRequested</code> event.
    """
    
    initiated_event_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('initiatedEventId') }})
    workflow_execution: WorkflowExecution = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflowExecution') }})
    
