from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import childpolicy_enum
from . import tasklist


@dataclass_json
@dataclass
class WorkflowExecutionConfiguration:
    child_policy: childpolicy_enum.ChildPolicyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'childPolicy' }})
    execution_start_to_close_timeout: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionStartToCloseTimeout' }})
    lambda_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lambdaRole' }})
    task_list: tasklist.TaskList = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskList' }})
    task_priority: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskPriority' }})
    task_start_to_close_timeout: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskStartToCloseTimeout' }})
    
