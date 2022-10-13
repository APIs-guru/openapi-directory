from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class UsersCreateRequestBody:
    email: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    

@dataclass
class UsersCreateSecurity:
    key: shared.SchemeKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UsersCreateRequest:
    request: Optional[UsersCreateRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UsersCreateSecurity = field(default=None)
    

@dataclass
class UsersCreateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    user: Optional[shared.User] = field(default=None)
    
