from dataclasses import dataclass, field



@dataclass
class EnterpriseAdminDeleteImpersonationOAuthTokenPathParams:
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminDeleteImpersonationOAuthTokenRequest:
    path_params: EnterpriseAdminDeleteImpersonationOAuthTokenPathParams = field()
    

@dataclass
class EnterpriseAdminDeleteImpersonationOAuthTokenResponse:
    content_type: str = field()
    status_code: int = field()
    
