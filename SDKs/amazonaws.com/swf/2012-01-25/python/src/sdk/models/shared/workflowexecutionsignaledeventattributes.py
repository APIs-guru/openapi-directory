from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WorkflowExecutionSignaledEventAttributes:
    r"""WorkflowExecutionSignaledEventAttributes
    Provides the details of the <code>WorkflowExecutionSignaled</code> event.
    """
    
    signal_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('signalName') }})
    external_initiated_event_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalInitiatedEventId') }})
    external_workflow_execution: Optional[WorkflowExecution] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalWorkflowExecution') }})
    input: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('input') }})
    
