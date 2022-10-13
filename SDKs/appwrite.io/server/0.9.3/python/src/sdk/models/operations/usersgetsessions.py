from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class UsersGetSessionsPathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersGetSessionsSecurity:
    key: shared.SchemeKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UsersGetSessionsRequest:
    path_params: UsersGetSessionsPathParams = field(default=None)
    security: UsersGetSessionsSecurity = field(default=None)
    

@dataclass
class UsersGetSessionsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    session_list: Optional[shared.SessionList] = field(default=None)
    
