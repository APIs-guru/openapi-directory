from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RequestAdConfigPathParams:
    ad_id: int = field(default=None, metadata={'path_param': { 'field_name': 'ad_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestAdConfigHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token' }})
    

@dataclass
class RequestAdConfigRequest:
    path_params: RequestAdConfigPathParams = field(default=None)
    headers: RequestAdConfigHeaders = field(default=None)
    

@dataclass
class RequestAdConfigResponse:
    active_directory_config: Optional[shared.ActiveDirectoryConfig] = field(default=None)
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
