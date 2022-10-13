from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ImageOcrPhotoRecognizeBusinessCardRequestBodyImageFile:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    image_file: str = field(default=None, metadata={'multipart_form': { 'field_name': 'imageFile' }})
    

@dataclass
class ImageOcrPhotoRecognizeBusinessCardRequestBody:
    image_file: ImageOcrPhotoRecognizeBusinessCardRequestBodyImageFile = field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass
class ImageOcrPhotoRecognizeBusinessCardSecurity:
    apikey: shared.SchemeApikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ImageOcrPhotoRecognizeBusinessCardRequest:
    request: ImageOcrPhotoRecognizeBusinessCardRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: ImageOcrPhotoRecognizeBusinessCardSecurity = field(default=None)
    

@dataclass
class ImageOcrPhotoRecognizeBusinessCardResponse:
    body: bytes = field(default=None)
    business_card_recognition_result: Optional[shared.BusinessCardRecognitionResult] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
