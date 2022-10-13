from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import activitytype
from . import tasklist


@dataclass_json
@dataclass
class ScheduleActivityTaskDecisionAttributes:
    activity_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activityId' }})
    activity_type: activitytype.ActivityType = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activityType' }})
    control: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'control' }})
    heartbeat_timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'heartbeatTimeout' }})
    input: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'input' }})
    schedule_to_close_timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduleToCloseTimeout' }})
    schedule_to_start_timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduleToStartTimeout' }})
    start_to_close_timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startToCloseTimeout' }})
    task_list: Optional[tasklist.TaskList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskList' }})
    task_priority: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskPriority' }})
    
