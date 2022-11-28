from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeAutomationStepExecutionsRequest:
    automation_execution_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutomationExecutionId') }})
    filters: Optional[List[StepExecutionFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Filters') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    reverse_order: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReverseOrder') }})
    
