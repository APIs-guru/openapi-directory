from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class UploadFileToLockerIDHeaders:
    hmac: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'hmac', 'style': 'simple', 'explode': False }})
    path: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclass
class UploadFileToLockerIDRequests:
    application_octet_stream: bytes = field(default=None, metadata={'request': { 'media_type': 'application/octet-stream' }})
    image_jpeg: bytes = field(default=None, metadata={'request': { 'media_type': 'image/jpeg' }})
    image_jpg: bytes = field(default=None, metadata={'request': { 'media_type': 'image/jpg' }})
    image_pdf: bytes = field(default=None, metadata={'request': { 'media_type': 'image/pdf' }})
    image_png: bytes = field(default=None, metadata={'request': { 'media_type': 'image/png' }})
    

@dataclass
class UploadFileToLockerIDSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UploadFileToLockerIDRequest:
    headers: UploadFileToLockerIDHeaders = field(default=None)
    request: Optional[UploadFileToLockerIDRequests] = field(default=None)
    security: UploadFileToLockerIDSecurity = field(default=None)
    

@dataclass_json
@dataclass
class UploadFileToLockerID400ApplicationJSON:
    error: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_description' }})
    

@dataclass_json
@dataclass
class UploadFileToLockerID401ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_description' }})
    

@dataclass_json
@dataclass
class UploadFileToLockerID500ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_description' }})
    

@dataclass
class UploadFileToLockerIDResponse:
    content_type: str = field(default=None)
    file_upload_response: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    upload_file_to_locker_id_400_application_json_object: Optional[UploadFileToLockerID400ApplicationJSON] = field(default=None)
    upload_file_to_locker_id_401_application_json_object: Optional[UploadFileToLockerID401ApplicationJSON] = field(default=None)
    upload_file_to_locker_id_500_application_json_object: Optional[UploadFileToLockerID500ApplicationJSON] = field(default=None)
    
