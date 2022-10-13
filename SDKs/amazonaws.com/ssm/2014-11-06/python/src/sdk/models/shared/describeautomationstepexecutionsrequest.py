from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import stepexecutionfilter


@dataclass_json
@dataclass
class DescribeAutomationStepExecutionsRequest:
    automation_execution_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutomationExecutionId' }})
    filters: Optional[List[stepexecutionfilter.StepExecutionFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Filters' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    reverse_order: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReverseOrder' }})
    
