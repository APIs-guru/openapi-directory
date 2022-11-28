from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StartChildWorkflowExecutionFailedEventAttributes:
    r"""StartChildWorkflowExecutionFailedEventAttributes
    Provides the details of the <code>StartChildWorkflowExecutionFailed</code> event.
    """
    
    cause: StartChildWorkflowExecutionFailedCauseEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cause') }})
    decision_task_completed_event_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('decisionTaskCompletedEventId') }})
    initiated_event_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('initiatedEventId') }})
    workflow_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflowId') }})
    workflow_type: WorkflowType = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflowType') }})
    control: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('control') }})
    
