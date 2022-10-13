from dataclasses import dataclass, field



@dataclass
class OrgsCheckPublicMembershipForUserPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class OrgsCheckPublicMembershipForUserRequest:
    path_params: OrgsCheckPublicMembershipForUserPathParams = field(default=None)
    

@dataclass
class OrgsCheckPublicMembershipForUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
