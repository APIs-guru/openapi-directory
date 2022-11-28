from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RequestAdConfigPathParams:
    ad_id: int = field(metadata={'path_param': { 'field_name': 'ad_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestAdConfigHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestAdConfigRequest:
    headers: RequestAdConfigHeaders = field()
    path_params: RequestAdConfigPathParams = field()
    

@dataclass
class RequestAdConfigResponse:
    content_type: str = field()
    status_code: int = field()
    active_directory_config: Optional[shared.ActiveDirectoryConfig] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
