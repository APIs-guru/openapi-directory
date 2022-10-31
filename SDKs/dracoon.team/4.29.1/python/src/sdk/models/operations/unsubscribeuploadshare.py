from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UnsubscribeUploadSharePathParams:
    share_id: int = field(default=None, metadata={'path_param': { 'field_name': 'share_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UnsubscribeUploadShareHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class UnsubscribeUploadShareRequest:
    path_params: UnsubscribeUploadSharePathParams = field(default=None)
    headers: UnsubscribeUploadShareHeaders = field(default=None)
    

@dataclass
class UnsubscribeUploadShareResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
