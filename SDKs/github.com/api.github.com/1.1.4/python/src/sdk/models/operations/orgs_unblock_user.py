from dataclasses import dataclass, field



@dataclass
class OrgsUnblockUserPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class OrgsUnblockUserRequest:
    path_params: OrgsUnblockUserPathParams = field(default=None)
    

@dataclass
class OrgsUnblockUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
