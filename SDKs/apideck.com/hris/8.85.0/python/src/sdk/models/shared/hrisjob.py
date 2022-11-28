from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class HrisJobEmploymentStatusEnum(str, Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"
    TERMINATED = "terminated"
    OTHER = "other"


@dataclass_json
@dataclass
class HrisJobLocation:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class HrisJob:
    department: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('department') }})
    employee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('employee_id') }})
    employment_status: Optional[HrisJobEmploymentStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('employment_status') }})
    end_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    location: Optional[HrisJobLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    start_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
