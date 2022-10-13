from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class OauthAuthorizationsDeleteAuthorizationPathParams:
    authorization_id: int = field(default=None, metadata={'path_param': { 'field_name': 'authorization_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class OauthAuthorizationsDeleteAuthorizationRequest:
    path_params: OauthAuthorizationsDeleteAuthorizationPathParams = field(default=None)
    

@dataclass
class OauthAuthorizationsDeleteAuthorizationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    
