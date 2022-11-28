from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ChildWorkflowExecutionCanceledEventAttributes:
    r"""ChildWorkflowExecutionCanceledEventAttributes
    Provide details of the <code>ChildWorkflowExecutionCanceled</code> event.
    """
    
    initiated_event_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('initiatedEventId') }})
    started_event_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startedEventId') }})
    workflow_execution: WorkflowExecution = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflowExecution') }})
    workflow_type: WorkflowType = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflowType') }})
    details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    
