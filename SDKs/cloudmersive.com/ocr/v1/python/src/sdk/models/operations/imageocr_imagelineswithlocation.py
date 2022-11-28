from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ImageOcrImageLinesWithLocationHeaders:
    language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'language', 'style': 'simple', 'explode': False }})
    preprocessing: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'preprocessing', 'style': 'simple', 'explode': False }})
    

@dataclass
class ImageOcrImageLinesWithLocationRequestBodyImageFile:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    image_file: str = field(metadata={'multipart_form': { 'field_name': 'imageFile' }})
    

@dataclass
class ImageOcrImageLinesWithLocationRequestBody:
    image_file: ImageOcrImageLinesWithLocationRequestBodyImageFile = field(metadata={'multipart_form': { 'file': True }})
    

@dataclass
class ImageOcrImageLinesWithLocationSecurity:
    apikey: shared.SchemeApikey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ImageOcrImageLinesWithLocationRequest:
    headers: ImageOcrImageLinesWithLocationHeaders = field()
    request: ImageOcrImageLinesWithLocationRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: ImageOcrImageLinesWithLocationSecurity = field()
    

@dataclass
class ImageOcrImageLinesWithLocationResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    image_to_lines_with_location_result: Optional[shared.ImageToLinesWithLocationResult] = field(default=None)
    
