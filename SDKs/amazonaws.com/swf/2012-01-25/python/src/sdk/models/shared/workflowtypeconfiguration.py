from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WorkflowTypeConfiguration:
    r"""WorkflowTypeConfiguration
    The configuration settings of a workflow type.
    """
    
    default_child_policy: Optional[ChildPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultChildPolicy') }})
    default_execution_start_to_close_timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultExecutionStartToCloseTimeout') }})
    default_lambda_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultLambdaRole') }})
    default_task_list: Optional[TaskList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultTaskList') }})
    default_task_priority: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultTaskPriority') }})
    default_task_start_to_close_timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultTaskStartToCloseTimeout') }})
    
