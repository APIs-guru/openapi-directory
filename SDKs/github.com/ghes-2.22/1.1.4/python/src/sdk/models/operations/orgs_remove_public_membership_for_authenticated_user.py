from dataclasses import dataclass, field



@dataclass
class OrgsRemovePublicMembershipForAuthenticatedUserPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class OrgsRemovePublicMembershipForAuthenticatedUserRequest:
    path_params: OrgsRemovePublicMembershipForAuthenticatedUserPathParams = field(default=None)
    

@dataclass
class OrgsRemovePublicMembershipForAuthenticatedUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
