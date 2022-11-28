from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RemoveUploadSharePathParams:
    share_id: int = field(metadata={'path_param': { 'field_name': 'share_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveUploadShareHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveUploadShareRequest:
    headers: RemoveUploadShareHeaders = field()
    path_params: RemoveUploadSharePathParams = field()
    

@dataclass
class RemoveUploadShareResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
