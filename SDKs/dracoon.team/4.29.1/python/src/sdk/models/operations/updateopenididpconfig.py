from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateOpenIDIdpConfigPathParams:
    idp_id: int = field(metadata={'path_param': { 'field_name': 'idp_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateOpenIDIdpConfigHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateOpenIDIdpConfigRequest:
    headers: UpdateOpenIDIdpConfigHeaders = field()
    path_params: UpdateOpenIDIdpConfigPathParams = field()
    request: shared.UpdateOpenIDIdpConfigRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateOpenIDIdpConfigResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    open_id_idp_config: Optional[shared.OpenIDIdpConfig] = field(default=None)
    
