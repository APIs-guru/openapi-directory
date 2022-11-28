from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class JobScheduleFrequency:
    r"""JobScheduleFrequency
    Specifies the recurrence pattern for running a classification job.
    """
    
    daily_schedule: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dailySchedule') }})
    monthly_schedule: Optional[MonthlySchedule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthlySchedule') }})
    weekly_schedule: Optional[WeeklySchedule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weeklySchedule') }})
    
