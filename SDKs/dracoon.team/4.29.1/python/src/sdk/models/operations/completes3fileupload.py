from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CompleteS3FileUploadPathParams:
    upload_id: str = field(default=None, metadata={'path_param': { 'field_name': 'upload_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompleteS3FileUploadHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompleteS3FileUploadRequest:
    path_params: CompleteS3FileUploadPathParams = field(default=None)
    headers: CompleteS3FileUploadHeaders = field(default=None)
    request: shared.CompleteS3FileUploadRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CompleteS3FileUploadResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
