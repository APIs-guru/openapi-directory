from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateMonitoringScheduleRequest:
    monitoring_schedule_config: MonitoringScheduleConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MonitoringScheduleConfig') }})
    monitoring_schedule_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MonitoringScheduleName') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
