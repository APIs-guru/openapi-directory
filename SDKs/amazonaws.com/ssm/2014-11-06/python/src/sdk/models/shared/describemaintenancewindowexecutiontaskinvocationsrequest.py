from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeMaintenanceWindowExecutionTaskInvocationsRequest:
    task_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaskId') }})
    window_execution_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WindowExecutionId') }})
    filters: Optional[List[MaintenanceWindowFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Filters') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
