from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import stepexecution


@dataclass_json
@dataclass
class DescribeAutomationStepExecutionsResult:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    step_executions: Optional[List[stepexecution.StepExecution]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StepExecutions' }})
    
