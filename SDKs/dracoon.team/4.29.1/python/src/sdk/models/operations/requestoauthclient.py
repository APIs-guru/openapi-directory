from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RequestOAuthClientPathParams:
    client_id: str = field(metadata={'path_param': { 'field_name': 'client_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestOAuthClientHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestOAuthClientRequest:
    headers: RequestOAuthClientHeaders = field()
    path_params: RequestOAuthClientPathParams = field()
    

@dataclass
class RequestOAuthClientResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    o_auth_client: Optional[shared.OAuthClient] = field(default=None)
    
