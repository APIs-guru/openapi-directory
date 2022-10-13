from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TaskCountResponse:
    num_completed_milestones: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'num_completed_milestones' }})
    num_completed_tasks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'num_completed_tasks' }})
    num_incomplete_milestones: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'num_incomplete_milestones' }})
    num_incomplete_tasks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'num_incomplete_tasks' }})
    num_milestones: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'num_milestones' }})
    num_tasks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'num_tasks' }})
    
