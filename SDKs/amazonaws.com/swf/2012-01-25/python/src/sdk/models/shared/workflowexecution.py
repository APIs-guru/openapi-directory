from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WorkflowExecution:
    r"""WorkflowExecution
    Represents a workflow execution.
    """
    
    run_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('runId') }})
    workflow_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflowId') }})
    
