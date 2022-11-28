from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ImageOcrImageWordsWithLocationHeaders:
    language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'language', 'style': 'simple', 'explode': False }})
    preprocessing: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'preprocessing', 'style': 'simple', 'explode': False }})
    

@dataclass
class ImageOcrImageWordsWithLocationRequestBodyImageFile:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    image_file: str = field(metadata={'multipart_form': { 'field_name': 'imageFile' }})
    

@dataclass
class ImageOcrImageWordsWithLocationRequestBody:
    image_file: ImageOcrImageWordsWithLocationRequestBodyImageFile = field(metadata={'multipart_form': { 'file': True }})
    

@dataclass
class ImageOcrImageWordsWithLocationSecurity:
    apikey: shared.SchemeApikey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ImageOcrImageWordsWithLocationRequest:
    headers: ImageOcrImageWordsWithLocationHeaders = field()
    request: ImageOcrImageWordsWithLocationRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: ImageOcrImageWordsWithLocationSecurity = field()
    

@dataclass
class ImageOcrImageWordsWithLocationResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    image_to_words_with_location_result: Optional[shared.ImageToWordsWithLocationResult] = field(default=None)
    
