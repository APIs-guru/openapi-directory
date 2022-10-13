from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import childpolicy_enum
from . import tasklist


@dataclass_json
@dataclass
class ContinueAsNewWorkflowExecutionDecisionAttributes:
    child_policy: Optional[childpolicy_enum.ChildPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'childPolicy' }})
    execution_start_to_close_timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionStartToCloseTimeout' }})
    input: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'input' }})
    lambda_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lambdaRole' }})
    tag_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagList' }})
    task_list: Optional[tasklist.TaskList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskList' }})
    task_priority: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskPriority' }})
    task_start_to_close_timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskStartToCloseTimeout' }})
    workflow_type_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workflowTypeVersion' }})
    
