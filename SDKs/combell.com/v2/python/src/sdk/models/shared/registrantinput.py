from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import extrafield


@dataclass_json
@dataclass
class RegistrantInput:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'city' }})
    company_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'company_name' }})
    country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country_code' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    enterprise_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enterprise_number' }})
    extra_fields: Optional[List[extrafield.ExtraField]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extra_fields' }})
    fax: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fax' }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_name' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language_code' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_name' }})
    phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone' }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postal_code' }})
    
