from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SubscribeDownloadSharePathParams:
    share_id: int = field(default=None, metadata={'path_param': { 'field_name': 'share_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SubscribeDownloadShareHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class SubscribeDownloadShareRequest:
    path_params: SubscribeDownloadSharePathParams = field(default=None)
    headers: SubscribeDownloadShareHeaders = field(default=None)
    

@dataclass
class SubscribeDownloadShareResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    subscribed_download_share: Optional[shared.SubscribedDownloadShare] = field(default=None)
    
