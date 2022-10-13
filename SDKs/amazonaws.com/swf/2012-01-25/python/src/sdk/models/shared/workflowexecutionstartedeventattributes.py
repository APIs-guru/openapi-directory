from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import childpolicy_enum
from . import workflowexecution
from . import tasklist
from . import workflowtype


@dataclass_json
@dataclass
class WorkflowExecutionStartedEventAttributes:
    child_policy: childpolicy_enum.ChildPolicyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'childPolicy' }})
    continued_execution_run_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'continuedExecutionRunId' }})
    execution_start_to_close_timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionStartToCloseTimeout' }})
    input: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'input' }})
    lambda_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lambdaRole' }})
    parent_initiated_event_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentInitiatedEventId' }})
    parent_workflow_execution: Optional[workflowexecution.WorkflowExecution] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentWorkflowExecution' }})
    tag_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagList' }})
    task_list: tasklist.TaskList = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskList' }})
    task_priority: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskPriority' }})
    task_start_to_close_timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskStartToCloseTimeout' }})
    workflow_type: workflowtype.WorkflowType = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workflowType' }})
    
