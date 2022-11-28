from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StartWorkflowExecutionInput:
    domain: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    workflow_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflowId') }})
    workflow_type: WorkflowType = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflowType') }})
    child_policy: Optional[ChildPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('childPolicy') }})
    execution_start_to_close_timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionStartToCloseTimeout') }})
    input: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('input') }})
    lambda_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambdaRole') }})
    tag_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagList') }})
    task_list: Optional[TaskList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskList') }})
    task_priority: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskPriority') }})
    task_start_to_close_timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskStartToCloseTimeout') }})
    
