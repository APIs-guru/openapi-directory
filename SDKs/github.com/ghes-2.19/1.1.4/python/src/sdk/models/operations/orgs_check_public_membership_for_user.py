from dataclasses import dataclass, field



@dataclass
class OrgsCheckPublicMembershipForUserPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class OrgsCheckPublicMembershipForUserRequest:
    path_params: OrgsCheckPublicMembershipForUserPathParams = field()
    

@dataclass
class OrgsCheckPublicMembershipForUserResponse:
    content_type: str = field()
    status_code: int = field()
    
