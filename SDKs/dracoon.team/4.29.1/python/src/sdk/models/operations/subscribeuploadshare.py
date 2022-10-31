from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SubscribeUploadSharePathParams:
    share_id: int = field(default=None, metadata={'path_param': { 'field_name': 'share_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SubscribeUploadShareHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class SubscribeUploadShareRequest:
    path_params: SubscribeUploadSharePathParams = field(default=None)
    headers: SubscribeUploadShareHeaders = field(default=None)
    

@dataclass
class SubscribeUploadShareResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    subscribed_upload_share: Optional[shared.SubscribedUploadShare] = field(default=None)
    
