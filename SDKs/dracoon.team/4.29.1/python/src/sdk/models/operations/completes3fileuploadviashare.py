from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CompleteS3FileUploadViaSharePathParams:
    access_key: str = field(default=None, metadata={'path_param': { 'field_name': 'access_key', 'style': 'simple', 'explode': False }})
    upload_id: str = field(default=None, metadata={'path_param': { 'field_name': 'upload_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompleteS3FileUploadViaShareRequest:
    path_params: CompleteS3FileUploadViaSharePathParams = field(default=None)
    request: shared.CompleteS3ShareUploadRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CompleteS3FileUploadViaShareResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
