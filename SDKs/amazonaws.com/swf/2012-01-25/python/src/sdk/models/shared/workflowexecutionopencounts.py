from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class WorkflowExecutionOpenCounts:
    open_activity_tasks: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'openActivityTasks' }})
    open_child_workflow_executions: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'openChildWorkflowExecutions' }})
    open_decision_tasks: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'openDecisionTasks' }})
    open_lambda_functions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'openLambdaFunctions' }})
    open_timers: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'openTimers' }})
    
