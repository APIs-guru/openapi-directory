from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ImageOcrPhotoToTextHeaders:
    language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'language' }})
    recognition_mode: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'recognitionMode' }})
    

@dataclass
class ImageOcrPhotoToTextRequestBodyImageFile:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    image_file: str = field(default=None, metadata={'multipart_form': { 'field_name': 'imageFile' }})
    

@dataclass
class ImageOcrPhotoToTextRequestBody:
    image_file: ImageOcrPhotoToTextRequestBodyImageFile = field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass
class ImageOcrPhotoToTextSecurity:
    apikey: shared.SchemeApikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ImageOcrPhotoToTextRequest:
    headers: ImageOcrPhotoToTextHeaders = field(default=None)
    request: ImageOcrPhotoToTextRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: ImageOcrPhotoToTextSecurity = field(default=None)
    

@dataclass
class ImageOcrPhotoToTextResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    image_to_text_response: Optional[shared.ImageToTextResponse] = field(default=None)
    status_code: int = field(default=None)
    
