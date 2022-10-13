from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class UsersGetLogsPathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersGetLogsSecurity:
    key: shared.SchemeKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UsersGetLogsRequest:
    path_params: UsersGetLogsPathParams = field(default=None)
    security: UsersGetLogsSecurity = field(default=None)
    

@dataclass
class UsersGetLogsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    log_list: Optional[shared.LogList] = field(default=None)
    
