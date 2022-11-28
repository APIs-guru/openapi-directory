from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TaskCountResponse:
    r"""TaskCountResponse
    A response object returned from the task count endpoint.
    """
    
    num_completed_milestones: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_completed_milestones') }})
    num_completed_tasks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_completed_tasks') }})
    num_incomplete_milestones: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_incomplete_milestones') }})
    num_incomplete_tasks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_incomplete_tasks') }})
    num_milestones: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_milestones') }})
    num_tasks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_tasks') }})
    
