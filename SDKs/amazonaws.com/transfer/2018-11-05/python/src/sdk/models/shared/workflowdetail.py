from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WorkflowDetail:
    r"""WorkflowDetail
    Specifies the workflow ID for the workflow to assign and the execution role used for executing the workflow.
    """
    
    execution_role: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecutionRole') }})
    workflow_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkflowId') }})
    
