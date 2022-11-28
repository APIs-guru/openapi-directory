from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WeeklySchedule:
    r"""WeeklySchedule
    Specifies a weekly recurrence pattern for running a classification job.
    """
    
    day_of_week: Optional[DayOfWeekEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dayOfWeek') }})
    
