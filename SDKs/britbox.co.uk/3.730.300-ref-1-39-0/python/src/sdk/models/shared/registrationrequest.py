from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RegistrationRequest:
    email: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstName' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastName' }})
    marketing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marketing' }})
    password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    pin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pin' }})
    segments: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'segments' }})
    
