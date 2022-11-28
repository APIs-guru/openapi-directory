from dataclasses import dataclass, field



@dataclass
class OrgsUnblockUserPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class OrgsUnblockUserRequest:
    path_params: OrgsUnblockUserPathParams = field()
    

@dataclass
class OrgsUnblockUserResponse:
    content_type: str = field()
    status_code: int = field()
    
