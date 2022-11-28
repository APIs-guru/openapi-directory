from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class HrisCompanyStatusEnum(str, Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"
    TRIAL = "trial"
    OTHER = "other"


@dataclass_json
@dataclass
class HrisCompany:
    legal_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('legal_name') }})
    addresses: Optional[List[Address]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addresses') }})
    company_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('company_number') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_by') }})
    debtor_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('debtor_id') }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_name') }})
    emails: Optional[List[Email]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emails') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    phone_numbers: Optional[List[PhoneNumber]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_numbers') }})
    status: Optional[HrisCompanyStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    subdomain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subdomain') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_by') }})
    websites: Optional[List[Website]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('websites') }})
    

@dataclass_json
@dataclass
class HrisCompanyInput:
    legal_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('legal_name') }})
    addresses: Optional[List[Address]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addresses') }})
    company_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('company_number') }})
    debtor_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('debtor_id') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_name') }})
    emails: Optional[List[Email]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emails') }})
    phone_numbers: Optional[List[PhoneNumber]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_numbers') }})
    status: Optional[HrisCompanyStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    subdomain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subdomain') }})
    websites: Optional[List[Website]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('websites') }})
    
