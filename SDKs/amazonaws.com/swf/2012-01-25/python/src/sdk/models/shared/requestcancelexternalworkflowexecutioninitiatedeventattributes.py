from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RequestCancelExternalWorkflowExecutionInitiatedEventAttributes:
    r"""RequestCancelExternalWorkflowExecutionInitiatedEventAttributes
    Provides the details of the <code>RequestCancelExternalWorkflowExecutionInitiated</code> event.
    """
    
    decision_task_completed_event_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('decisionTaskCompletedEventId') }})
    workflow_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflowId') }})
    control: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('control') }})
    run_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runId') }})
    
