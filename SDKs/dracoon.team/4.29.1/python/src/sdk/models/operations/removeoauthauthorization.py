from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RemoveOAuthAuthorizationPathParams:
    authorization_id: int = field(default=None, metadata={'path_param': { 'field_name': 'authorization_id', 'style': 'simple', 'explode': False }})
    client_id: str = field(default=None, metadata={'path_param': { 'field_name': 'client_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveOAuthAuthorizationHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveOAuthAuthorizationRequest:
    path_params: RemoveOAuthAuthorizationPathParams = field(default=None)
    headers: RemoveOAuthAuthorizationHeaders = field(default=None)
    

@dataclass
class RemoveOAuthAuthorizationResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
