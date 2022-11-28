from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WorkflowExecutionOpenCounts:
    r"""WorkflowExecutionOpenCounts
    Contains the counts of open tasks, child workflow executions and timers for a workflow execution.
    """
    
    open_activity_tasks: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('openActivityTasks') }})
    open_child_workflow_executions: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('openChildWorkflowExecutions') }})
    open_decision_tasks: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('openDecisionTasks') }})
    open_timers: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('openTimers') }})
    open_lambda_functions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openLambdaFunctions') }})
    
