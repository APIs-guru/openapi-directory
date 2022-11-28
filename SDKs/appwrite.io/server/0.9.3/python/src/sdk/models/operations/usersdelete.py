from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class UsersDeletePathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersDeleteSecurity:
    key: shared.SchemeKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UsersDeleteRequest:
    path_params: UsersDeletePathParams = field()
    security: UsersDeleteSecurity = field()
    

@dataclass
class UsersDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
