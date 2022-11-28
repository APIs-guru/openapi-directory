from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ImageOcrPhotoToTextHeaders:
    language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'language', 'style': 'simple', 'explode': False }})
    recognition_mode: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'recognitionMode', 'style': 'simple', 'explode': False }})
    

@dataclass
class ImageOcrPhotoToTextRequestBodyImageFile:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    image_file: str = field(metadata={'multipart_form': { 'field_name': 'imageFile' }})
    

@dataclass
class ImageOcrPhotoToTextRequestBody:
    image_file: ImageOcrPhotoToTextRequestBodyImageFile = field(metadata={'multipart_form': { 'file': True }})
    

@dataclass
class ImageOcrPhotoToTextSecurity:
    apikey: shared.SchemeApikey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ImageOcrPhotoToTextRequest:
    headers: ImageOcrPhotoToTextHeaders = field()
    request: ImageOcrPhotoToTextRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: ImageOcrPhotoToTextSecurity = field()
    

@dataclass
class ImageOcrPhotoToTextResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    image_to_text_response: Optional[shared.ImageToTextResponse] = field(default=None)
    
