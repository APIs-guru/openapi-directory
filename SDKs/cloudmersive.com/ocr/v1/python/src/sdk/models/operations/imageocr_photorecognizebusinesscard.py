from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ImageOcrPhotoRecognizeBusinessCardRequestBodyImageFile:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    image_file: str = field(metadata={'multipart_form': { 'field_name': 'imageFile' }})
    

@dataclass
class ImageOcrPhotoRecognizeBusinessCardRequestBody:
    image_file: ImageOcrPhotoRecognizeBusinessCardRequestBodyImageFile = field(metadata={'multipart_form': { 'file': True }})
    

@dataclass
class ImageOcrPhotoRecognizeBusinessCardSecurity:
    apikey: shared.SchemeApikey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ImageOcrPhotoRecognizeBusinessCardRequest:
    request: ImageOcrPhotoRecognizeBusinessCardRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: ImageOcrPhotoRecognizeBusinessCardSecurity = field()
    

@dataclass
class ImageOcrPhotoRecognizeBusinessCardResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    business_card_recognition_result: Optional[shared.BusinessCardRecognitionResult] = field(default=None)
    
