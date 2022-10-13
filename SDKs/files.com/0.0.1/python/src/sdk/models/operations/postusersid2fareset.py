from dataclasses import dataclass, field



@dataclass
class PostUsersId2faResetPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostUsersId2faResetRequest:
    path_params: PostUsersId2faResetPathParams = field(default=None)
    

@dataclass
class PostUsersId2faResetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
