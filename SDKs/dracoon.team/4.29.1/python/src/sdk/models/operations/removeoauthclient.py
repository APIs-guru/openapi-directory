from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RemoveOAuthClientPathParams:
    client_id: str = field(metadata={'path_param': { 'field_name': 'client_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveOAuthClientHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveOAuthClientRequest:
    headers: RemoveOAuthClientHeaders = field()
    path_params: RemoveOAuthClientPathParams = field()
    

@dataclass
class RemoveOAuthClientResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
