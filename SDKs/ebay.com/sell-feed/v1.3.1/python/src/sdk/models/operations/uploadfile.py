from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UploadFilePathParams:
    task_id: str = field(metadata={'path_param': { 'field_name': 'task_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UploadFileSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UploadFileRequest:
    path_params: UploadFilePathParams = field()
    security: UploadFileSecurity = field()
    request: Optional[shared.FormDataContentDisposition] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class UploadFileResponse:
    content_type: str = field()
    status_code: int = field()
    upload_file_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
