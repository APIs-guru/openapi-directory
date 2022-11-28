from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CountClosedWorkflowExecutionsInput:
    domain: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    close_status_filter: Optional[CloseStatusFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('closeStatusFilter') }})
    close_time_filter: Optional[ExecutionTimeFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('closeTimeFilter') }})
    execution_filter: Optional[WorkflowExecutionFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionFilter') }})
    start_time_filter: Optional[ExecutionTimeFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTimeFilter') }})
    tag_filter: Optional[TagFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagFilter') }})
    type_filter: Optional[WorkflowTypeFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('typeFilter') }})
    
