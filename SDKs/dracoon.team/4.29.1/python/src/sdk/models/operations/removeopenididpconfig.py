from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RemoveOpenIDIdpConfigPathParams:
    idp_id: int = field(default=None, metadata={'path_param': { 'field_name': 'idp_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveOpenIDIdpConfigHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token' }})
    

@dataclass
class RemoveOpenIDIdpConfigRequest:
    path_params: RemoveOpenIDIdpConfigPathParams = field(default=None)
    headers: RemoveOpenIDIdpConfigHeaders = field(default=None)
    

@dataclass
class RemoveOpenIDIdpConfigResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
