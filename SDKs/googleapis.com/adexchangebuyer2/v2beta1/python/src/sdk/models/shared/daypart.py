from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class DayPartDayOfWeekEnum(str, Enum):
    DAY_OF_WEEK_UNSPECIFIED = "DAY_OF_WEEK_UNSPECIFIED"
    MONDAY = "MONDAY"
    TUESDAY = "TUESDAY"
    WEDNESDAY = "WEDNESDAY"
    THURSDAY = "THURSDAY"
    FRIDAY = "FRIDAY"
    SATURDAY = "SATURDAY"
    SUNDAY = "SUNDAY"


@dataclass_json
@dataclass
class DayPart:
    r"""DayPart
    Daypart targeting message that specifies if the ad can be shown only during certain parts of a day/week.
    """
    
    day_of_week: Optional[DayPartDayOfWeekEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dayOfWeek') }})
    end_time: Optional[TimeOfDay] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    start_time: Optional[TimeOfDay] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    
