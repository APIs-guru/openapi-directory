from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class AccountingCustomerStatusStatusEnum(str, Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"
    ARCHIVED = "archived"
    GDPR_ERASURE_REQUEST = "gdpr-erasure-request"
    UNKNOWN = "unknown"


@dataclass_json
@dataclass
class AccountingCustomer:
    addresses: Optional[List[shared.Address]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addresses' }})
    bank_accounts: Optional[List[shared.BankAccount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bank_accounts' }})
    company_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'company_name' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_by' }})
    currency: Optional[shared.CurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    display_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_id' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_name' }})
    emails: Optional[List[shared.Email]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emails' }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_name' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    individual: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'individual' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_name' }})
    middle_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'middle_name' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    phone_numbers: Optional[List[shared.PhoneNumber]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone_numbers' }})
    row_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'row_version' }})
    status: Optional[AccountingCustomerStatusStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    suffix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suffix' }})
    tax_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tax_number' }})
    tax_rate: Optional[shared.LinkedTaxRate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tax_rate' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_by' }})
    websites: Optional[List[shared.Website]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'websites' }})
    
