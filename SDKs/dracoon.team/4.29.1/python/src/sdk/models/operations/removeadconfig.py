from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RemoveAdConfigPathParams:
    ad_id: int = field(default=None, metadata={'path_param': { 'field_name': 'ad_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveAdConfigHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token' }})
    

@dataclass
class RemoveAdConfigRequest:
    path_params: RemoveAdConfigPathParams = field(default=None)
    headers: RemoveAdConfigHeaders = field(default=None)
    

@dataclass
class RemoveAdConfigResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
