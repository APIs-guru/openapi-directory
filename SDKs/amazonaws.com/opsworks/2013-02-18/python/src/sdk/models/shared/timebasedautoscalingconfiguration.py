from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import weeklyautoscalingschedule


@dataclass_json
@dataclass
class TimeBasedAutoScalingConfiguration:
    auto_scaling_schedule: Optional[weeklyautoscalingschedule.WeeklyAutoScalingSchedule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoScalingSchedule' }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceId' }})
    
