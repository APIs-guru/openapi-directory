from dataclasses import dataclass, field



@dataclass
class PostUsersIDUnlockPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostUsersIDUnlockRequest:
    path_params: PostUsersIDUnlockPathParams = field()
    

@dataclass
class PostUsersIDUnlockResponse:
    content_type: str = field()
    status_code: int = field()
    
