from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ImageOcrPhotoWordsWithLocationHeaders:
    diagnostics: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'diagnostics' }})
    language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'language' }})
    preprocessing: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'preprocessing' }})
    recognition_mode: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'recognitionMode' }})
    

@dataclass
class ImageOcrPhotoWordsWithLocationRequestBodyImageFile:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    image_file: str = field(default=None, metadata={'multipart_form': { 'field_name': 'imageFile' }})
    

@dataclass
class ImageOcrPhotoWordsWithLocationRequestBody:
    image_file: ImageOcrPhotoWordsWithLocationRequestBodyImageFile = field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass
class ImageOcrPhotoWordsWithLocationSecurity:
    apikey: shared.SchemeApikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ImageOcrPhotoWordsWithLocationRequest:
    headers: ImageOcrPhotoWordsWithLocationHeaders = field(default=None)
    request: ImageOcrPhotoWordsWithLocationRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: ImageOcrPhotoWordsWithLocationSecurity = field(default=None)
    

@dataclass
class ImageOcrPhotoWordsWithLocationResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    photo_to_words_with_location_result: Optional[shared.PhotoToWordsWithLocationResult] = field(default=None)
    status_code: int = field(default=None)
    
