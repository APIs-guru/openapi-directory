from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import childpolicy_enum
from . import tasklist
from . import workflowtype


@dataclass_json
@dataclass
class WorkflowExecutionContinuedAsNewEventAttributes:
    child_policy: childpolicy_enum.ChildPolicyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'childPolicy' }})
    decision_task_completed_event_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'decisionTaskCompletedEventId' }})
    execution_start_to_close_timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionStartToCloseTimeout' }})
    input: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'input' }})
    lambda_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lambdaRole' }})
    new_execution_run_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newExecutionRunId' }})
    tag_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagList' }})
    task_list: tasklist.TaskList = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskList' }})
    task_priority: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskPriority' }})
    task_start_to_close_timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskStartToCloseTimeout' }})
    workflow_type: workflowtype.WorkflowType = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workflowType' }})
    
