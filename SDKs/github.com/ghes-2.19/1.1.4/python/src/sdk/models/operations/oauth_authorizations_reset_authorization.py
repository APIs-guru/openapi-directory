from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class OauthAuthorizationsResetAuthorizationPathParams:
    access_token: str = field(metadata={'path_param': { 'field_name': 'access_token', 'style': 'simple', 'explode': False }})
    client_id: str = field(metadata={'path_param': { 'field_name': 'client_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class OauthAuthorizationsResetAuthorizationRequest:
    path_params: OauthAuthorizationsResetAuthorizationPathParams = field()
    

@dataclass
class OauthAuthorizationsResetAuthorizationResponse:
    content_type: str = field()
    status_code: int = field()
    authorization_with_user: Optional[shared.AuthorizationWithUser] = field(default=None)
    
