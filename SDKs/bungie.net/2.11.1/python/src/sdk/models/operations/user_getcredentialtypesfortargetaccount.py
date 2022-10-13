from dataclasses import dataclass, field



@dataclass
class UserGetCredentialTypesForTargetAccountPathParams:
    membership_id: int = field(default=None, metadata={'path_param': { 'field_name': 'membershipId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UserGetCredentialTypesForTargetAccountRequest:
    path_params: UserGetCredentialTypesForTargetAccountPathParams = field(default=None)
    

@dataclass
class UserGetCredentialTypesForTargetAccountResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
