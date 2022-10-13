from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import childpolicy_enum
from . import tasklist


@dataclass_json
@dataclass
class WorkflowTypeConfiguration:
    default_child_policy: Optional[childpolicy_enum.ChildPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultChildPolicy' }})
    default_execution_start_to_close_timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultExecutionStartToCloseTimeout' }})
    default_lambda_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultLambdaRole' }})
    default_task_list: Optional[tasklist.TaskList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultTaskList' }})
    default_task_priority: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultTaskPriority' }})
    default_task_start_to_close_timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultTaskStartToCloseTimeout' }})
    
