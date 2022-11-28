from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SubscribeUploadSharePathParams:
    share_id: int = field(metadata={'path_param': { 'field_name': 'share_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SubscribeUploadShareHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class SubscribeUploadShareRequest:
    headers: SubscribeUploadShareHeaders = field()
    path_params: SubscribeUploadSharePathParams = field()
    

@dataclass
class SubscribeUploadShareResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    subscribed_upload_share: Optional[shared.SubscribedUploadShare] = field(default=None)
    
