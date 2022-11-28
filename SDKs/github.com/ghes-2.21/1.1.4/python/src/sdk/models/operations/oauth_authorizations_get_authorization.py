from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class OauthAuthorizationsGetAuthorizationPathParams:
    authorization_id: int = field(metadata={'path_param': { 'field_name': 'authorization_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class OauthAuthorizationsGetAuthorizationRequest:
    path_params: OauthAuthorizationsGetAuthorizationPathParams = field()
    

@dataclass
class OauthAuthorizationsGetAuthorizationResponse:
    content_type: str = field()
    status_code: int = field()
    authorization: Optional[shared.Authorization] = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    
