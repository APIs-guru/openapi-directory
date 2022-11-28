from dataclasses import dataclass, field



@dataclass
class EnterpriseAdminDeletePersonalAccessTokenPathParams:
    token_id: int = field(metadata={'path_param': { 'field_name': 'token_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminDeletePersonalAccessTokenRequest:
    path_params: EnterpriseAdminDeletePersonalAccessTokenPathParams = field()
    

@dataclass
class EnterpriseAdminDeletePersonalAccessTokenResponse:
    content_type: str = field()
    status_code: int = field()
    
