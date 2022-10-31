from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class RequestDownloadSharePathParams:
    share_id: int = field(default=None, metadata={'path_param': { 'field_name': 'share_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestDownloadShareHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestDownloadShareRequest:
    path_params: RequestDownloadSharePathParams = field(default=None)
    headers: RequestDownloadShareHeaders = field(default=None)
    

@dataclass
class RequestDownloadShareResponse:
    content_type: str = field(default=None)
    download_share: Optional[shared.DownloadShare] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
