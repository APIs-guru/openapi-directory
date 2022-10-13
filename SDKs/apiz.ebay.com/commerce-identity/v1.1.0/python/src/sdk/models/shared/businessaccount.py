from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import address
from . import contact
from . import phone
from . import phone


@dataclass_json
@dataclass
class BusinessAccount:
    address: Optional[address.Address] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    doing_business_as: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'doingBusinessAs' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    primary_contact: Optional[contact.Contact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryContact' }})
    primary_phone: Optional[phone.Phone] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryPhone' }})
    secondary_phone: Optional[phone.Phone] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondaryPhone' }})
    website: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'website' }})
    
