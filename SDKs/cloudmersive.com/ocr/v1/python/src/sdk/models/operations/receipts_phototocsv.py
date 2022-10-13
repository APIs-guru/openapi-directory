from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class ReceiptsPhotoToCsvRequestBodyImageFile:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    image_file: str = field(default=None, metadata={'multipart_form': { 'field_name': 'imageFile' }})
    

@dataclass
class ReceiptsPhotoToCsvRequestBody:
    image_file: ReceiptsPhotoToCsvRequestBodyImageFile = field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass
class ReceiptsPhotoToCsvSecurity:
    apikey: shared.SchemeApikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ReceiptsPhotoToCsvRequest:
    request: ReceiptsPhotoToCsvRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: ReceiptsPhotoToCsvSecurity = field(default=None)
    

@dataclass
class ReceiptsPhotoToCsvResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    receipts_photo_to_csv_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    receipts_photo_to_csv_200_text_json_object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
