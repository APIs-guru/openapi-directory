from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CountOpenWorkflowExecutionsInput:
    domain: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    start_time_filter: ExecutionTimeFilter = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTimeFilter') }})
    execution_filter: Optional[WorkflowExecutionFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionFilter') }})
    tag_filter: Optional[TagFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagFilter') }})
    type_filter: Optional[WorkflowTypeFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('typeFilter') }})
    
