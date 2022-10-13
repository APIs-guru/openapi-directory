from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UsersUpdateVerificationPathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UsersUpdateVerificationRequestBody:
    email_verification: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emailVerification' }})
    

@dataclass
class UsersUpdateVerificationSecurity:
    key: shared.SchemeKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UsersUpdateVerificationRequest:
    path_params: UsersUpdateVerificationPathParams = field(default=None)
    request: Optional[UsersUpdateVerificationRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UsersUpdateVerificationSecurity = field(default=None)
    

@dataclass
class UsersUpdateVerificationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    user: Optional[shared.User] = field(default=None)
    
