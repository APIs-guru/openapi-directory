from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TimeOffRequestNotes:
    employee: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('employee') }})
    manager: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manager') }})
    
class TimeOffRequestRequestTypeEnum(str, Enum):
    VACATION = "vacation"
    SICK = "sick"
    PERSONAL = "personal"
    JURY_DUTY = "jury_duty"
    VOLUNTEER = "volunteer"
    BEREAVEMENT = "bereavement"
    OTHER = "other"

class TimeOffRequestStatusEnum(str, Enum):
    REQUESTED = "requested"
    APPROVED = "approved"
    DECLINED = "declined"
    CANCELLED = "cancelled"
    DELETED = "deleted"
    OTHER = "other"

class TimeOffRequestUnitsEnum(str, Enum):
    DAYS = "days"
    HOURS = "hours"
    OTHER = "other"


@dataclass_json
@dataclass
class TimeOffRequestInput:
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    approval_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approval_date') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    employee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('employee_id') }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_date') }})
    notes: Optional[TimeOffRequestNotes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    policy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy_id') }})
    request_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_date') }})
    request_type: Optional[TimeOffRequestRequestTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_type') }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_date') }})
    status: Optional[TimeOffRequestStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    units: Optional[TimeOffRequestUnitsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('units') }})
    

@dataclass_json
@dataclass
class TimeOffRequest:
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    approval_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approval_date') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_by') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    employee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('employee_id') }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_date') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    notes: Optional[TimeOffRequestNotes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    policy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy_id') }})
    request_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_date') }})
    request_type: Optional[TimeOffRequestRequestTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_type') }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_date') }})
    status: Optional[TimeOffRequestStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    units: Optional[TimeOffRequestUnitsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('units') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_by') }})
    
