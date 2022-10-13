from dataclasses import dataclass, field



@dataclass
class EnterpriseAdminDeleteImpersonationOAuthTokenPathParams:
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminDeleteImpersonationOAuthTokenRequest:
    path_params: EnterpriseAdminDeleteImpersonationOAuthTokenPathParams = field(default=None)
    

@dataclass
class EnterpriseAdminDeleteImpersonationOAuthTokenResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
