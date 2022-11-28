from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WorkflowExecutionCount:
    r"""WorkflowExecutionCount
    Contains the count of workflow executions returned from <a>CountOpenWorkflowExecutions</a> or <a>CountClosedWorkflowExecutions</a> 
    """
    
    count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    truncated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('truncated') }})
    
