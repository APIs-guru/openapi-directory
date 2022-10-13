from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ItvUpdateProfileRequest:
    date_of_birth: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateOfBirth' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstName' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastName' }})
    postcode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postcode' }})
    profile_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profileToken' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
