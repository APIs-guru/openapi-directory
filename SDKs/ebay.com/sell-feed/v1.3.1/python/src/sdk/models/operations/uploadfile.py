from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UploadFilePathParams:
    task_id: str = field(default=None, metadata={'path_param': { 'field_name': 'task_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UploadFileSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UploadFileRequest:
    path_params: UploadFilePathParams = field(default=None)
    request: Optional[shared.FormDataContentDisposition] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: UploadFileSecurity = field(default=None)
    

@dataclass
class UploadFileResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    upload_file_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
