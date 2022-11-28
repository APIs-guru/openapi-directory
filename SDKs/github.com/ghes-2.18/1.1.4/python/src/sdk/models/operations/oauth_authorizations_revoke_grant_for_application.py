from dataclasses import dataclass, field



@dataclass
class OauthAuthorizationsRevokeGrantForApplicationPathParams:
    access_token: str = field(metadata={'path_param': { 'field_name': 'access_token', 'style': 'simple', 'explode': False }})
    client_id: str = field(metadata={'path_param': { 'field_name': 'client_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class OauthAuthorizationsRevokeGrantForApplicationRequest:
    path_params: OauthAuthorizationsRevokeGrantForApplicationPathParams = field()
    

@dataclass
class OauthAuthorizationsRevokeGrantForApplicationResponse:
    content_type: str = field()
    status_code: int = field()
    
