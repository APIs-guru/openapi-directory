from dataclasses import dataclass, field



@dataclass
class UsersDeleteSessionsPathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersDeleteSessionsSecurity:
    key: shared.SchemeKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UsersDeleteSessionsRequest:
    path_params: UsersDeleteSessionsPathParams = field(default=None)
    security: UsersDeleteSessionsSecurity = field(default=None)
    

@dataclass
class UsersDeleteSessionsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
