from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RemoveOpenIDIdpConfigPathParams:
    idp_id: int = field(metadata={'path_param': { 'field_name': 'idp_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveOpenIDIdpConfigHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveOpenIDIdpConfigRequest:
    headers: RemoveOpenIDIdpConfigHeaders = field()
    path_params: RemoveOpenIDIdpConfigPathParams = field()
    

@dataclass
class RemoveOpenIDIdpConfigResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
