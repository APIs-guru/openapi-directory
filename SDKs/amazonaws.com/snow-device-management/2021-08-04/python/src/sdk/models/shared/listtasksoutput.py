from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tasksummary


@dataclass_json
@dataclass
class ListTasksOutput:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    tasks: Optional[List[tasksummary.TaskSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tasks' }})
    
