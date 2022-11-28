from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AccountingCustomerStatusEnum(str, Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"
    ARCHIVED = "archived"
    GDPR_ERASURE_REQUEST = "gdpr-erasure-request"
    UNKNOWN = "unknown"


@dataclass_json
@dataclass
class AccountingCustomer:
    addresses: Optional[List[Address]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addresses') }})
    bank_accounts: Optional[List[BankAccount]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bank_accounts') }})
    company_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('company_name') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_by') }})
    currency: Optional[CurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    display_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_id') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_name') }})
    emails: Optional[List[Email]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emails') }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    individual: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('individual') }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_name') }})
    middle_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('middle_name') }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    phone_numbers: Optional[List[PhoneNumber]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_numbers') }})
    row_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('row_version') }})
    status: Optional[AccountingCustomerStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    suffix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suffix') }})
    tax_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tax_number') }})
    tax_rate: Optional[LinkedTaxRate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tax_rate') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_by') }})
    websites: Optional[List[Website]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('websites') }})
    

@dataclass_json
@dataclass
class AccountingCustomerInput:
    addresses: Optional[List[Address]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addresses') }})
    bank_accounts: Optional[List[BankAccount]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bank_accounts') }})
    company_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('company_name') }})
    currency: Optional[CurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    display_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_id') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_name') }})
    emails: Optional[List[Email]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emails') }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    individual: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('individual') }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_name') }})
    middle_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('middle_name') }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    phone_numbers: Optional[List[PhoneNumber]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_numbers') }})
    row_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('row_version') }})
    status: Optional[AccountingCustomerStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    suffix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suffix') }})
    tax_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tax_number') }})
    tax_rate: Optional[LinkedTaxRateInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tax_rate') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    websites: Optional[List[Website]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('websites') }})
    
