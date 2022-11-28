from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateAdConfigPathParams:
    ad_id: int = field(metadata={'path_param': { 'field_name': 'ad_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateAdConfigHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateAdConfigRequest:
    headers: UpdateAdConfigHeaders = field()
    path_params: UpdateAdConfigPathParams = field()
    request: shared.UpdateActiveDirectoryConfigRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateAdConfigResponse:
    content_type: str = field()
    status_code: int = field()
    active_directory_config: Optional[shared.ActiveDirectoryConfig] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
