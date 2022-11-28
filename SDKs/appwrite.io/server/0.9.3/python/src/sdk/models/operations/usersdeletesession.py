from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class UsersDeleteSessionPathParams:
    session_id: str = field(metadata={'path_param': { 'field_name': 'sessionId', 'style': 'simple', 'explode': False }})
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersDeleteSessionSecurity:
    key: shared.SchemeKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UsersDeleteSessionRequest:
    path_params: UsersDeleteSessionPathParams = field()
    security: UsersDeleteSessionSecurity = field()
    

@dataclass
class UsersDeleteSessionResponse:
    content_type: str = field()
    status_code: int = field()
    
