from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class AccountCreateSessionRequestBody:
    email: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    

@dataclass
class AccountCreateSessionSecurity:
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AccountCreateSessionRequest:
    request: Optional[AccountCreateSessionRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: AccountCreateSessionSecurity = field(default=None)
    

@dataclass
class AccountCreateSessionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    session: Optional[shared.Session] = field(default=None)
    
