from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SubscribeDownloadSharePathParams:
    share_id: int = field(metadata={'path_param': { 'field_name': 'share_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SubscribeDownloadShareHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class SubscribeDownloadShareRequest:
    headers: SubscribeDownloadShareHeaders = field()
    path_params: SubscribeDownloadSharePathParams = field()
    

@dataclass
class SubscribeDownloadShareResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    subscribed_download_share: Optional[shared.SubscribedDownloadShare] = field(default=None)
    
