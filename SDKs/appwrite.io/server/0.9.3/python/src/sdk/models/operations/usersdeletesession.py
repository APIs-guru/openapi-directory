from dataclasses import dataclass, field



@dataclass
class UsersDeleteSessionPathParams:
    session_id: str = field(default=None, metadata={'path_param': { 'field_name': 'sessionId', 'style': 'simple', 'explode': False }})
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersDeleteSessionSecurity:
    key: shared.SchemeKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UsersDeleteSessionRequest:
    path_params: UsersDeleteSessionPathParams = field(default=None)
    security: UsersDeleteSessionSecurity = field(default=None)
    

@dataclass
class UsersDeleteSessionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
