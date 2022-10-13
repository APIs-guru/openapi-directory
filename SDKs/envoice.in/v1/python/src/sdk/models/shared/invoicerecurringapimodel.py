from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    day_of_month: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DayOfMonth' }})
    day_of_week: Optional[InvoiceRecurringAPIModelDayOfWeekEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DayOfWeek' }})
    due_date_in_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DueDateInDays' }})
    end_of_recurrance: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndOfRecurrance', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    month: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Month' }})
    recurrance_pattern: Optional[InvoiceRecurringAPIModelRecurrancePatternEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecurrancePattern' }})
    recurrance_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecurranceValue' }})
    start_of_recurrance: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartOfRecurrance', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[InvoiceRecurringAPIModelStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Title' }})
    
