from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UsersGetLogsPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersGetLogsSecurity:
    key: shared.SchemeKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UsersGetLogsRequest:
    path_params: UsersGetLogsPathParams = field()
    security: UsersGetLogsSecurity = field()
    

@dataclass
class UsersGetLogsResponse:
    content_type: str = field()
    status_code: int = field()
    log_list: Optional[shared.LogList] = field(default=None)
    
