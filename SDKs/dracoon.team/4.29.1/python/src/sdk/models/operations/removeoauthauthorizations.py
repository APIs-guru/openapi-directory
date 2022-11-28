from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RemoveOAuthAuthorizationsPathParams:
    client_id: str = field(metadata={'path_param': { 'field_name': 'client_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveOAuthAuthorizationsHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveOAuthAuthorizationsRequest:
    headers: RemoveOAuthAuthorizationsHeaders = field()
    path_params: RemoveOAuthAuthorizationsPathParams = field()
    

@dataclass
class RemoveOAuthAuthorizationsResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
