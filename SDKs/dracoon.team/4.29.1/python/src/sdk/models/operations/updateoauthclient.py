from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UpdateOAuthClientPathParams:
    client_id: str = field(metadata={'path_param': { 'field_name': 'client_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateOAuthClientHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateOAuthClientRequest:
    headers: UpdateOAuthClientHeaders = field()
    path_params: UpdateOAuthClientPathParams = field()
    request: shared.UpdateOAuthClientRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateOAuthClientResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    o_auth_client: Optional[shared.OAuthClient] = field(default=None)
    update_o_auth_client_400_application_json_one_of: Optional[Any] = field(default=None)
    
