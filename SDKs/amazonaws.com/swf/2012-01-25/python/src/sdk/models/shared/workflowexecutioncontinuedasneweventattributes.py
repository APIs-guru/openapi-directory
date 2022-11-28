from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WorkflowExecutionContinuedAsNewEventAttributes:
    r"""WorkflowExecutionContinuedAsNewEventAttributes
    Provides the details of the <code>WorkflowExecutionContinuedAsNew</code> event.
    """
    
    child_policy: ChildPolicyEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('childPolicy') }})
    decision_task_completed_event_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('decisionTaskCompletedEventId') }})
    new_execution_run_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('newExecutionRunId') }})
    task_list: TaskList = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskList') }})
    workflow_type: WorkflowType = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflowType') }})
    execution_start_to_close_timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionStartToCloseTimeout') }})
    input: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('input') }})
    lambda_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambdaRole') }})
    tag_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagList') }})
    task_priority: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskPriority') }})
    task_start_to_close_timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskStartToCloseTimeout') }})
    
