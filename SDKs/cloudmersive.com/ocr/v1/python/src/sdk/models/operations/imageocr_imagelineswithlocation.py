from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ImageOcrImageLinesWithLocationHeaders:
    language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'language' }})
    preprocessing: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'preprocessing' }})
    

@dataclass
class ImageOcrImageLinesWithLocationRequestBodyImageFile:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    image_file: str = field(default=None, metadata={'multipart_form': { 'field_name': 'imageFile' }})
    

@dataclass
class ImageOcrImageLinesWithLocationRequestBody:
    image_file: ImageOcrImageLinesWithLocationRequestBodyImageFile = field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass
class ImageOcrImageLinesWithLocationSecurity:
    apikey: shared.SchemeApikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ImageOcrImageLinesWithLocationRequest:
    headers: ImageOcrImageLinesWithLocationHeaders = field(default=None)
    request: ImageOcrImageLinesWithLocationRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: ImageOcrImageLinesWithLocationSecurity = field(default=None)
    

@dataclass
class ImageOcrImageLinesWithLocationResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    image_to_lines_with_location_result: Optional[shared.ImageToLinesWithLocationResult] = field(default=None)
    status_code: int = field(default=None)
    
