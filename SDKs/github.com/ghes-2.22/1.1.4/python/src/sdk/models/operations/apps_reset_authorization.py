from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AppsResetAuthorizationPathParams:
    access_token: str = field(metadata={'path_param': { 'field_name': 'access_token', 'style': 'simple', 'explode': False }})
    client_id: str = field(metadata={'path_param': { 'field_name': 'client_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AppsResetAuthorizationRequest:
    path_params: AppsResetAuthorizationPathParams = field()
    

@dataclass
class AppsResetAuthorizationResponse:
    content_type: str = field()
    status_code: int = field()
    authorization: Optional[shared.Authorization] = field(default=None)
    
