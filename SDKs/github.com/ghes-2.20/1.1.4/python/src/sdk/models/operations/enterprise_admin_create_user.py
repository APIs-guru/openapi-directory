from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class EnterpriseAdminCreateUserRequestBody:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    login: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'login' }})
    

@dataclass
class EnterpriseAdminCreateUserRequest:
    request: Optional[EnterpriseAdminCreateUserRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminCreateUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    simple_user: Optional[shared.SimpleUser] = field(default=None)
    
