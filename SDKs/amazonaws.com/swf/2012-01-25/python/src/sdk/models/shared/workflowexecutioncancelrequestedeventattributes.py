from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WorkflowExecutionCancelRequestedEventAttributes:
    r"""WorkflowExecutionCancelRequestedEventAttributes
    Provides the details of the <code>WorkflowExecutionCancelRequested</code> event.
    """
    
    cause: Optional[WorkflowExecutionCancelRequestedCauseEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cause') }})
    external_initiated_event_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalInitiatedEventId') }})
    external_workflow_execution: Optional[WorkflowExecution] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalWorkflowExecution') }})
    
