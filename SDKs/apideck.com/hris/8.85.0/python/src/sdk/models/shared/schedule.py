from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ScheduleWorkPatternEvenWeeks:
    hours_friday: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hours_friday') }})
    hours_monday: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hours_monday') }})
    hours_saturday: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hours_saturday') }})
    hours_sunday: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hours_sunday') }})
    hours_thursday: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hours_thursday') }})
    hours_tuesday: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hours_tuesday') }})
    hours_wednesday: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hours_wednesday') }})
    

@dataclass_json
@dataclass
class ScheduleWorkPatternOddWeeks:
    hours_friday: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hours_friday') }})
    hours_monday: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hours_monday') }})
    hours_saturday: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hours_saturday') }})
    hours_sunday: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hours_sunday') }})
    hours_thursday: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hours_thursday') }})
    hours_tuesday: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hours_tuesday') }})
    hours_wednesday: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hours_wednesday') }})
    

@dataclass_json
@dataclass
class ScheduleWorkPattern:
    even_weeks: Optional[ScheduleWorkPatternEvenWeeks] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('even_weeks') }})
    odd_weeks: Optional[ScheduleWorkPatternOddWeeks] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('odd_weeks') }})
    

@dataclass_json
@dataclass
class Schedule:
    end_date: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_date') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    start_date: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_date') }})
    work_pattern: ScheduleWorkPattern = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('work_pattern') }})
    
