from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RequestOpenIDIdpConfigPathParams:
    idp_id: int = field(default=None, metadata={'path_param': { 'field_name': 'idp_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestOpenIDIdpConfigHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestOpenIDIdpConfigRequest:
    path_params: RequestOpenIDIdpConfigPathParams = field(default=None)
    headers: RequestOpenIDIdpConfigHeaders = field(default=None)
    

@dataclass
class RequestOpenIDIdpConfigResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    open_id_idp_config: Optional[shared.OpenIDIdpConfig] = field(default=None)
    status_code: int = field(default=None)
    
