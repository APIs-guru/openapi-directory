from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UpdateDownloadSharePathParams:
    share_id: int = field(default=None, metadata={'path_param': { 'field_name': 'share_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateDownloadShareHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token' }})
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format' }})
    

@dataclass
class UpdateDownloadShareRequest:
    path_params: UpdateDownloadSharePathParams = field(default=None)
    headers: UpdateDownloadShareHeaders = field(default=None)
    request: shared.UpdateDownloadShareRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateDownloadShareResponse:
    content_type: str = field(default=None)
    download_share: Optional[shared.DownloadShare] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    update_download_share_400_application_json_one_of: Optional[Any] = field(default=None)
    
