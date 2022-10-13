from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class AccountUpdateEmailRequestBody:
    email: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    

@dataclass
class AccountUpdateEmailSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AccountUpdateEmailRequest:
    request: Optional[AccountUpdateEmailRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: AccountUpdateEmailSecurity = field(default=None)
    

@dataclass
class AccountUpdateEmailResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    user: Optional[shared.User] = field(default=None)
    
