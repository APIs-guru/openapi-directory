from dataclasses import dataclass, field



@dataclass
class UsersDeletePathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersDeleteSecurity:
    key: shared.SchemeKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UsersDeleteRequest:
    path_params: UsersDeletePathParams = field(default=None)
    security: UsersDeleteSecurity = field(default=None)
    

@dataclass
class UsersDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
