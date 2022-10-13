from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import monitoringscheduleconfig


@dataclass_json
@dataclass
class UpdateMonitoringScheduleRequest:
    monitoring_schedule_config: monitoringscheduleconfig.MonitoringScheduleConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MonitoringScheduleConfig' }})
    monitoring_schedule_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MonitoringScheduleName' }})
    
