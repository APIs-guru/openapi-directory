from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import monitoringscheduleconfig
from . import tag


@dataclass_json
@dataclass
class CreateMonitoringScheduleRequest:
    monitoring_schedule_config: monitoringscheduleconfig.MonitoringScheduleConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MonitoringScheduleConfig' }})
    monitoring_schedule_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MonitoringScheduleName' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
