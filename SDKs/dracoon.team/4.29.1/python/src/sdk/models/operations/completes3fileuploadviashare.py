from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CompleteS3FileUploadViaSharePathParams:
    access_key: str = field(metadata={'path_param': { 'field_name': 'access_key', 'style': 'simple', 'explode': False }})
    upload_id: str = field(metadata={'path_param': { 'field_name': 'upload_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompleteS3FileUploadViaShareRequest:
    path_params: CompleteS3FileUploadViaSharePathParams = field()
    request: shared.CompleteS3ShareUploadRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CompleteS3FileUploadViaShareResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
