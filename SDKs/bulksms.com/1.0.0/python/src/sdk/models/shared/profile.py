from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ProfileCommerceAddress:
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'city' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postalCode' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    street: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'street' }})
    

@dataclass_json
@dataclass
class ProfileCommerce:
    address: Optional[ProfileCommerceAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    bank_payment_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bankPaymentReference' }})
    

@dataclass_json
@dataclass
class ProfileCompany:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    tax_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxReference' }})
    

@dataclass_json
@dataclass
class ProfileCredits:
    balance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'balance' }})
    is_transfer_allowed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isTransferAllowed' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    

@dataclass_json
@dataclass
class ProfileOriginAddresses:
    allowed: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowed' }})
    is_full_control_allowed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isFullControlAllowed' }})
    

@dataclass_json
@dataclass
class ProfileQuota:
    remaining: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remaining' }})
    size: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    

@dataclass_json
@dataclass
class Profile:
    commerce: Optional[ProfileCommerce] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commerce' }})
    company: Optional[ProfileCompany] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'company' }})
    created: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    credits: ProfileCredits = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credits' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    origin_addresses: Optional[ProfileOriginAddresses] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originAddresses' }})
    quota: ProfileQuota = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quota' }})
    username: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    
