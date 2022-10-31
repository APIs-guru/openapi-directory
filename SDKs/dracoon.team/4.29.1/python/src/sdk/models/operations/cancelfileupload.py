from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CancelFileUploadPathParams:
    upload_id: str = field(default=None, metadata={'path_param': { 'field_name': 'upload_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CancelFileUploadHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class CancelFileUploadRequest:
    path_params: CancelFileUploadPathParams = field(default=None)
    headers: CancelFileUploadHeaders = field(default=None)
    

@dataclass
class CancelFileUploadResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
