from dataclasses import dataclass, field



@dataclass
class UserGetMembershipFromHardLinkedCredentialPathParams:
    cr_type: int = field(default=None, metadata={'path_param': { 'field_name': 'crType', 'style': 'simple', 'explode': False }})
    credential: str = field(default=None, metadata={'path_param': { 'field_name': 'credential', 'style': 'simple', 'explode': False }})
    

@dataclass
class UserGetMembershipFromHardLinkedCredentialRequest:
    path_params: UserGetMembershipFromHardLinkedCredentialPathParams = field(default=None)
    

@dataclass
class UserGetMembershipFromHardLinkedCredentialResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
