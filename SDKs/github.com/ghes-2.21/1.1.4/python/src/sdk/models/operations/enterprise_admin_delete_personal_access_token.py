from dataclasses import dataclass, field



@dataclass
class EnterpriseAdminDeletePersonalAccessTokenPathParams:
    token_id: int = field(default=None, metadata={'path_param': { 'field_name': 'token_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminDeletePersonalAccessTokenRequest:
    path_params: EnterpriseAdminDeletePersonalAccessTokenPathParams = field(default=None)
    

@dataclass
class EnterpriseAdminDeletePersonalAccessTokenResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
