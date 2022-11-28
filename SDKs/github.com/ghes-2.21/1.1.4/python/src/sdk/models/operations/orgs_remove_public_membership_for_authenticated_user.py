from dataclasses import dataclass, field



@dataclass
class OrgsRemovePublicMembershipForAuthenticatedUserPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class OrgsRemovePublicMembershipForAuthenticatedUserRequest:
    path_params: OrgsRemovePublicMembershipForAuthenticatedUserPathParams = field()
    

@dataclass
class OrgsRemovePublicMembershipForAuthenticatedUserResponse:
    content_type: str = field()
    status_code: int = field()
    
