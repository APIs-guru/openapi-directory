from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class OauthAuthorizationsDeleteAuthorizationPathParams:
    authorization_id: int = field(metadata={'path_param': { 'field_name': 'authorization_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class OauthAuthorizationsDeleteAuthorizationRequest:
    path_params: OauthAuthorizationsDeleteAuthorizationPathParams = field()
    

@dataclass
class OauthAuthorizationsDeleteAuthorizationResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    
