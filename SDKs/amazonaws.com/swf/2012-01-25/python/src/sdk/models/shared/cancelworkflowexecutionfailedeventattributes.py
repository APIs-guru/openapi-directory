from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CancelWorkflowExecutionFailedEventAttributes:
    r"""CancelWorkflowExecutionFailedEventAttributes
    Provides the details of the <code>CancelWorkflowExecutionFailed</code> event.
    """
    
    cause: CancelWorkflowExecutionFailedCauseEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cause') }})
    decision_task_completed_event_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('decisionTaskCompletedEventId') }})
    
