from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UploadFileToLockerIDHeaders:
    hmac: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'hmac', 'style': 'simple', 'explode': False }})
    path: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclass
class UploadFileToLockerIDRequests:
    application_octet_stream: bytes = field(metadata={'request': { 'media_type': 'application/octet-stream' }})
    image_jpeg: bytes = field(metadata={'request': { 'media_type': 'image/jpeg' }})
    image_jpg: bytes = field(metadata={'request': { 'media_type': 'image/jpg' }})
    image_pdf: bytes = field(metadata={'request': { 'media_type': 'image/pdf' }})
    image_png: bytes = field(metadata={'request': { 'media_type': 'image/png' }})
    

@dataclass
class UploadFileToLockerIDSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class UploadFileToLockerID400ApplicationJSON:
    error: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass_json
@dataclass
class UploadFileToLockerID401ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass_json
@dataclass
class UploadFileToLockerID500ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass
class UploadFileToLockerIDRequest:
    headers: UploadFileToLockerIDHeaders = field()
    security: UploadFileToLockerIDSecurity = field()
    request: Optional[UploadFileToLockerIDRequests] = field(default=None)
    

@dataclass
class UploadFileToLockerIDResponse:
    content_type: str = field()
    status_code: int = field()
    file_upload_response: Optional[Any] = field(default=None)
    upload_file_to_locker_id_400_application_json_object: Optional[UploadFileToLockerID400ApplicationJSON] = field(default=None)
    upload_file_to_locker_id_401_application_json_object: Optional[UploadFileToLockerID401ApplicationJSON] = field(default=None)
    upload_file_to_locker_id_500_application_json_object: Optional[UploadFileToLockerID500ApplicationJSON] = field(default=None)
    
