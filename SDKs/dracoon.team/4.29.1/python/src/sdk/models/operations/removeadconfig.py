from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RemoveAdConfigPathParams:
    ad_id: int = field(metadata={'path_param': { 'field_name': 'ad_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveAdConfigHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveAdConfigRequest:
    headers: RemoveAdConfigHeaders = field()
    path_params: RemoveAdConfigPathParams = field()
    

@dataclass
class RemoveAdConfigResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
