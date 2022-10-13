from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class RequestPublicUploadShareInfoPathParams:
    access_key: str = field(default=None, metadata={'path_param': { 'field_name': 'access_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestPublicUploadShareInfoHeaders:
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format' }})
    x_sds_share_password: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Share-Password' }})
    

@dataclass
class RequestPublicUploadShareInfoRequest:
    path_params: RequestPublicUploadShareInfoPathParams = field(default=None)
    headers: RequestPublicUploadShareInfoHeaders = field(default=None)
    

@dataclass
class RequestPublicUploadShareInfoResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    public_upload_share: Optional[shared.PublicUploadShare] = field(default=None)
    status_code: int = field(default=None)
    
