from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UpdateOAuthClientPathParams:
    client_id: str = field(default=None, metadata={'path_param': { 'field_name': 'client_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateOAuthClientHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateOAuthClientRequest:
    path_params: UpdateOAuthClientPathParams = field(default=None)
    headers: UpdateOAuthClientHeaders = field(default=None)
    request: shared.UpdateOAuthClientRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateOAuthClientResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    o_auth_client: Optional[shared.OAuthClient] = field(default=None)
    status_code: int = field(default=None)
    update_o_auth_client_400_application_json_one_of: Optional[Any] = field(default=None)
    
