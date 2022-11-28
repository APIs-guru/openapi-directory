from dataclasses import dataclass, field



@dataclass
class UsersCheckFollowingForUserPathParams:
    target_user: str = field(metadata={'path_param': { 'field_name': 'target_user', 'style': 'simple', 'explode': False }})
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersCheckFollowingForUserRequest:
    path_params: UsersCheckFollowingForUserPathParams = field()
    

@dataclass
class UsersCheckFollowingForUserResponse:
    content_type: str = field()
    status_code: int = field()
    
