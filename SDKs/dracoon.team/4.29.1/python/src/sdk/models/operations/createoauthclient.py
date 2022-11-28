from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CreateOAuthClientHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateOAuthClientRequest:
    headers: CreateOAuthClientHeaders = field()
    request: shared.CreateOAuthClientRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateOAuthClientResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    o_auth_client: Optional[shared.OAuthClient] = field(default=None)
    create_o_auth_client_400_application_json_one_of: Optional[Any] = field(default=None)
    
