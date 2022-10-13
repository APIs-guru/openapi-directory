from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class RequestPublicDownloadShareInfoPathParams:
    access_key: str = field(default=None, metadata={'path_param': { 'field_name': 'access_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestPublicDownloadShareInfoHeaders:
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format' }})
    

@dataclass
class RequestPublicDownloadShareInfoRequest:
    path_params: RequestPublicDownloadShareInfoPathParams = field(default=None)
    headers: RequestPublicDownloadShareInfoHeaders = field(default=None)
    

@dataclass
class RequestPublicDownloadShareInfoResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    public_download_share: Optional[shared.PublicDownloadShare] = field(default=None)
    status_code: int = field(default=None)
    
