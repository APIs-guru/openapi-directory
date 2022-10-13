from dataclasses import dataclass, field



@dataclass
class OauthAuthorizationsRevokeAuthorizationForApplicationPathParams:
    access_token: str = field(default=None, metadata={'path_param': { 'field_name': 'access_token', 'style': 'simple', 'explode': False }})
    client_id: str = field(default=None, metadata={'path_param': { 'field_name': 'client_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class OauthAuthorizationsRevokeAuthorizationForApplicationRequest:
    path_params: OauthAuthorizationsRevokeAuthorizationForApplicationPathParams = field(default=None)
    

@dataclass
class OauthAuthorizationsRevokeAuthorizationForApplicationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
