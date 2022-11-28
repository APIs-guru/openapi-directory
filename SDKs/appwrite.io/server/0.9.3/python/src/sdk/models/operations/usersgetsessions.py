from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UsersGetSessionsPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersGetSessionsSecurity:
    key: shared.SchemeKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UsersGetSessionsRequest:
    path_params: UsersGetSessionsPathParams = field()
    security: UsersGetSessionsSecurity = field()
    

@dataclass
class UsersGetSessionsResponse:
    content_type: str = field()
    status_code: int = field()
    session_list: Optional[shared.SessionList] = field(default=None)
    
