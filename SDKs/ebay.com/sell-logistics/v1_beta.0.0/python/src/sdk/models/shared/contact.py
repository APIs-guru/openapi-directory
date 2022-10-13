from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import contactaddress
from . import phonenumber


@dataclass_json
@dataclass
class Contact:
    company_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'companyName' }})
    contact_address: Optional[contactaddress.ContactAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contactAddress' }})
    full_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fullName' }})
    primary_phone: Optional[phonenumber.PhoneNumber] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryPhone' }})
    
