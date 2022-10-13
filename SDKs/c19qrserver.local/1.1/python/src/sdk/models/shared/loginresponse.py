from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LoginResponse:
    admin: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'admin' }})
    login_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'login_id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    read_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'read_only' }})
    token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token' }})
    
