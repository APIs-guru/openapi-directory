from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UsersGetPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersGetSecurity:
    key: shared.SchemeKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UsersGetRequest:
    path_params: UsersGetPathParams = field()
    security: UsersGetSecurity = field()
    

@dataclass
class UsersGetResponse:
    content_type: str = field()
    status_code: int = field()
    user: Optional[shared.User] = field(default=None)
    
