from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ImageOcrPostHeaders:
    language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'language' }})
    preprocessing: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'preprocessing' }})
    recognition_mode: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'recognitionMode' }})
    

@dataclass
class ImageOcrPostRequestBodyImageFile:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    image_file: str = field(default=None, metadata={'multipart_form': { 'field_name': 'imageFile' }})
    

@dataclass
class ImageOcrPostRequestBody:
    image_file: ImageOcrPostRequestBodyImageFile = field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass
class ImageOcrPostSecurity:
    apikey: shared.SchemeApikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ImageOcrPostRequest:
    headers: ImageOcrPostHeaders = field(default=None)
    request: ImageOcrPostRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: ImageOcrPostSecurity = field(default=None)
    

@dataclass
class ImageOcrPostResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    image_to_text_response: Optional[shared.ImageToTextResponse] = field(default=None)
    status_code: int = field(default=None)
    
