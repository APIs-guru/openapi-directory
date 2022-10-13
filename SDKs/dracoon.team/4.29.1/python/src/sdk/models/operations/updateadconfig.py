from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateAdConfigPathParams:
    ad_id: int = field(default=None, metadata={'path_param': { 'field_name': 'ad_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateAdConfigHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token' }})
    

@dataclass
class UpdateAdConfigRequest:
    path_params: UpdateAdConfigPathParams = field(default=None)
    headers: UpdateAdConfigHeaders = field(default=None)
    request: shared.UpdateActiveDirectoryConfigRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateAdConfigResponse:
    active_directory_config: Optional[shared.ActiveDirectoryConfig] = field(default=None)
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
