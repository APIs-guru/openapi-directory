from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateOpenIDIdpConfigPathParams:
    idp_id: int = field(default=None, metadata={'path_param': { 'field_name': 'idp_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateOpenIDIdpConfigHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token' }})
    

@dataclass
class UpdateOpenIDIdpConfigRequest:
    path_params: UpdateOpenIDIdpConfigPathParams = field(default=None)
    headers: UpdateOpenIDIdpConfigHeaders = field(default=None)
    request: shared.UpdateOpenIDIdpConfigRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateOpenIDIdpConfigResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    open_id_idp_config: Optional[shared.OpenIDIdpConfig] = field(default=None)
    status_code: int = field(default=None)
    
