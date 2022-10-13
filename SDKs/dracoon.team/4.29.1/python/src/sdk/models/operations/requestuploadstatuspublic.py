from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RequestUploadStatusPublicPathParams:
    access_key: str = field(default=None, metadata={'path_param': { 'field_name': 'access_key', 'style': 'simple', 'explode': False }})
    upload_id: str = field(default=None, metadata={'path_param': { 'field_name': 'upload_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestUploadStatusPublicRequest:
    path_params: RequestUploadStatusPublicPathParams = field(default=None)
    

@dataclass
class RequestUploadStatusPublicResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    s3_share_upload_status: Optional[shared.S3ShareUploadStatus] = field(default=None)
    status_code: int = field(default=None)
    
