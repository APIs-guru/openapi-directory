from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class RequestUploadStatusFilesPathParams:
    upload_id: str = field(default=None, metadata={'path_param': { 'field_name': 'upload_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestUploadStatusFilesHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestUploadStatusFilesRequest:
    path_params: RequestUploadStatusFilesPathParams = field(default=None)
    headers: RequestUploadStatusFilesHeaders = field(default=None)
    

@dataclass
class RequestUploadStatusFilesResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    s3_file_upload_status: Optional[shared.S3FileUploadStatus] = field(default=None)
    status_code: int = field(default=None)
    
