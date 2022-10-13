from dataclasses import dataclass, field
from typing import Any
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class User:
    dollar_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': '$id' }})
    email: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    email_verification: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emailVerification' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    password_update: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'passwordUpdate' }})
    prefs: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prefs' }})
    registration: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registration' }})
    status: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
