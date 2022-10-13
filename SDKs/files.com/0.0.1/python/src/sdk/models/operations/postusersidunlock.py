from dataclasses import dataclass, field



@dataclass
class PostUsersIDUnlockPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostUsersIDUnlockRequest:
    path_params: PostUsersIDUnlockPathParams = field(default=None)
    

@dataclass
class PostUsersIDUnlockResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
