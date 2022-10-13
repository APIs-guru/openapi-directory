from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UsersUpdateStatusPathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UsersUpdateStatusRequestBody:
    status: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class UsersUpdateStatusSecurity:
    key: shared.SchemeKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UsersUpdateStatusRequest:
    path_params: UsersUpdateStatusPathParams = field(default=None)
    request: Optional[UsersUpdateStatusRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UsersUpdateStatusSecurity = field(default=None)
    

@dataclass
class UsersUpdateStatusResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    user: Optional[shared.User] = field(default=None)
    
