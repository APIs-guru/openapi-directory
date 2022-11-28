from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class InvoiceRecurringAPIModelDayOfWeekEnum(str, Enum):
    SUNDAY = "Sunday"
    MONDAY = "Monday"
    TUESDAY = "Tuesday"
    WEDNESDAY = "Wednesday"
    THURSDAY = "Thursday"
    FRIDAY = "Friday"
    SATURDAY = "Saturday"

class InvoiceRecurringAPIModelRecurrancePatternEnum(str, Enum):
    DAILY = "Daily"
    WEEKLY = "Weekly"
    MONTHLY = "Monthly"
    YEARLY = "Yearly"

class InvoiceRecurringAPIModelStatusEnum(str, Enum):
    PENDING = "Pending"
    ACTIVE = "Active"
    CANCELLED = "Cancelled"
    FINISHED = "Finished"


@dataclass_json
@dataclass
class InvoiceRecurringAPIModel:
    r"""InvoiceRecurringAPIModel
    Definition of invoice recurring profile
    """
    
    day_of_month: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DayOfMonth') }})
    day_of_week: Optional[InvoiceRecurringAPIModelDayOfWeekEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DayOfWeek') }})
    due_date_in_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DueDateInDays') }})
    end_of_recurrance: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndOfRecurrance'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    month: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Month') }})
    recurrance_pattern: Optional[InvoiceRecurringAPIModelRecurrancePatternEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecurrancePattern') }})
    recurrance_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecurranceValue') }})
    start_of_recurrance: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartOfRecurrance'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[InvoiceRecurringAPIModelStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Title') }})
    
