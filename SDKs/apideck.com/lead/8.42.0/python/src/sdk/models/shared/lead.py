from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class Lead:
    addresses: Optional[List[shared.Address]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addresses' }})
    company_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'company_id' }})
    company_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'company_name' }})
    contact_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contact_id' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    currency: Optional[shared.CurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    custom_fields: Optional[List[shared.CustomField]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_fields' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    emails: Optional[List[shared.Email]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emails' }})
    fax: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fax' }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_name' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_name' }})
    lead_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lead_source' }})
    monetary_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monetary_amount' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    owner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner_id' }})
    phone_numbers: Optional[List[shared.PhoneNumber]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone_numbers' }})
    prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prefix' }})
    social_links: Optional[List[shared.SocialLink]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'social_links' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at' }})
    websites: Optional[List[shared.Website]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'websites' }})
    
