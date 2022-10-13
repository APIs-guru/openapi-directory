from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import phone
from . import address
from . import phone


@dataclass_json
@dataclass
class IndividualAccount:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstName' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastName' }})
    primary_phone: Optional[phone.Phone] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryPhone' }})
    registration_address: Optional[address.Address] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registrationAddress' }})
    secondary_phone: Optional[phone.Phone] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondaryPhone' }})
    
