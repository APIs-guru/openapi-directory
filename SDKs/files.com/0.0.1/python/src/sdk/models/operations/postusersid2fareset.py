from dataclasses import dataclass, field



@dataclass
class PostUsersId2faResetPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostUsersId2faResetRequest:
    path_params: PostUsersId2faResetPathParams = field()
    

@dataclass
class PostUsersId2faResetResponse:
    content_type: str = field()
    status_code: int = field()
    
