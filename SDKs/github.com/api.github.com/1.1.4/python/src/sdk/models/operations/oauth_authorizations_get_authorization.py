from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class OauthAuthorizationsGetAuthorizationPathParams:
    authorization_id: int = field(default=None, metadata={'path_param': { 'field_name': 'authorization_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class OauthAuthorizationsGetAuthorizationRequest:
    path_params: OauthAuthorizationsGetAuthorizationPathParams = field(default=None)
    

@dataclass
class OauthAuthorizationsGetAuthorizationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    authorization: Optional[shared.Authorization] = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    
