from dataclasses import dataclass, field



@dataclass
class UsersCheckFollowingForUserPathParams:
    target_user: str = field(default=None, metadata={'path_param': { 'field_name': 'target_user', 'style': 'simple', 'explode': False }})
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersCheckFollowingForUserRequest:
    path_params: UsersCheckFollowingForUserPathParams = field(default=None)
    

@dataclass
class UsersCheckFollowingForUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
