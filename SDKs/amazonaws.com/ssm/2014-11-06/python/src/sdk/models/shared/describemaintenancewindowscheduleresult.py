from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import scheduledwindowexecution


@dataclass_json
@dataclass
class DescribeMaintenanceWindowScheduleResult:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    scheduled_window_executions: Optional[List[scheduledwindowexecution.ScheduledWindowExecution]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScheduledWindowExecutions' }})
    
