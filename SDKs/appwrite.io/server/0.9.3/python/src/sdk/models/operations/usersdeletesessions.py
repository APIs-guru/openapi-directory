from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class UsersDeleteSessionsPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersDeleteSessionsSecurity:
    key: shared.SchemeKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UsersDeleteSessionsRequest:
    path_params: UsersDeleteSessionsPathParams = field()
    security: UsersDeleteSessionsSecurity = field()
    

@dataclass
class UsersDeleteSessionsResponse:
    content_type: str = field()
    status_code: int = field()
    
