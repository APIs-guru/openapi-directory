from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import monthlyschedule
from . import weeklyschedule


@dataclass_json
@dataclass
class JobScheduleFrequency:
    daily_schedule: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dailySchedule' }})
    monthly_schedule: Optional[monthlyschedule.MonthlySchedule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monthlySchedule' }})
    weekly_schedule: Optional[weeklyschedule.WeeklySchedule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weeklySchedule' }})
    
