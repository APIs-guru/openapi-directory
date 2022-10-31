from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class RequestUploadSharePathParams:
    share_id: int = field(default=None, metadata={'path_param': { 'field_name': 'share_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestUploadShareHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestUploadShareRequest:
    path_params: RequestUploadSharePathParams = field(default=None)
    headers: RequestUploadShareHeaders = field(default=None)
    

@dataclass
class RequestUploadShareResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    upload_share: Optional[shared.UploadShare] = field(default=None)
    
