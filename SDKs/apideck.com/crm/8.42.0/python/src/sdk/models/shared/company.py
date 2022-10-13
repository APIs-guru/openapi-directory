from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class CompanyRowTypeCompanyRowType:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class Company:
    abn_branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'abn_branch' }})
    abn_or_tfn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'abn_or_tfn' }})
    acn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acn' }})
    addresses: Optional[List[shared.Address]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addresses' }})
    annual_revenue: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annual_revenue' }})
    bank_accounts: Optional[List[shared.BankAccount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bank_accounts' }})
    birthday: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'birthday', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_by' }})
    currency: Optional[shared.CurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    custom_fields: Optional[List[shared.CustomField]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_fields' }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    emails: Optional[List[shared.Email]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emails' }})
    fax: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fax' }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_name' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    industry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'industry' }})
    interaction_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interaction_count' }})
    last_activity_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_activity_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_name' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    number_of_employees: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number_of_employees' }})
    owner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner_id' }})
    ownership: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownership' }})
    parent_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent_id' }})
    payee_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payee_number' }})
    phone_numbers: Optional[List[shared.PhoneNumber]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone_numbers' }})
    read_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'read_only' }})
    row_type: Optional[CompanyRowTypeCompanyRowType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'row_type' }})
    sales_tax_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sales_tax_number' }})
    salutation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'salutation' }})
    social_links: Optional[List[shared.SocialLink]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'social_links' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_by' }})
    vat_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vat_number' }})
    websites: Optional[List[shared.Website]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'websites' }})
    
