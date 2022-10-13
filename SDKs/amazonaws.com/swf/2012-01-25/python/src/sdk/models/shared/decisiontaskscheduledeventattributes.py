from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tasklist


@dataclass_json
@dataclass
class DecisionTaskScheduledEventAttributes:
    start_to_close_timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startToCloseTimeout' }})
    task_list: tasklist.TaskList = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskList' }})
    task_priority: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskPriority' }})
    
