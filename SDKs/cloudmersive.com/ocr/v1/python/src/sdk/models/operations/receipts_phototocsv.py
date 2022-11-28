from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ReceiptsPhotoToCsvRequestBodyImageFile:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    image_file: str = field(metadata={'multipart_form': { 'field_name': 'imageFile' }})
    

@dataclass
class ReceiptsPhotoToCsvRequestBody:
    image_file: ReceiptsPhotoToCsvRequestBodyImageFile = field(metadata={'multipart_form': { 'file': True }})
    

@dataclass
class ReceiptsPhotoToCsvSecurity:
    apikey: shared.SchemeApikey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ReceiptsPhotoToCsvRequest:
    request: ReceiptsPhotoToCsvRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: ReceiptsPhotoToCsvSecurity = field()
    

@dataclass
class ReceiptsPhotoToCsvResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    receipts_photo_to_csv_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    receipts_photo_to_csv_200_text_json_object: Optional[dict[str, Any]] = field(default=None)
    
