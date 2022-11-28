from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ProfileCommerceAddress:
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postalCode') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    street: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('street') }})
    

@dataclass_json
@dataclass
class ProfileCommerce:
    address: Optional[ProfileCommerceAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    bank_payment_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bankPaymentReference') }})
    

@dataclass_json
@dataclass
class ProfileCompany:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    tax_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxReference') }})
    

@dataclass_json
@dataclass
class ProfileCredits:
    balance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('balance') }})
    is_transfer_allowed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isTransferAllowed') }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    

@dataclass_json
@dataclass
class ProfileOriginAddresses:
    allowed: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowed') }})
    is_full_control_allowed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isFullControlAllowed') }})
    

@dataclass_json
@dataclass
class ProfileQuota:
    remaining: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('remaining') }})
    size: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    

@dataclass_json
@dataclass
class Profile:
    created: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    credits: ProfileCredits = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('credits') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    quota: ProfileQuota = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quota') }})
    username: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    commerce: Optional[ProfileCommerce] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commerce') }})
    company: Optional[ProfileCompany] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('company') }})
    origin_addresses: Optional[ProfileOriginAddresses] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originAddresses') }})
    
