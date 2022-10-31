from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ImageOcrPhotoRecognizeReceiptHeaders:
    language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'language', 'style': 'simple', 'explode': False }})
    preprocessing: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'preprocessing', 'style': 'simple', 'explode': False }})
    recognition_mode: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'recognitionMode', 'style': 'simple', 'explode': False }})
    

@dataclass
class ImageOcrPhotoRecognizeReceiptRequestBodyImageFile:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    image_file: str = field(default=None, metadata={'multipart_form': { 'field_name': 'imageFile' }})
    

@dataclass
class ImageOcrPhotoRecognizeReceiptRequestBody:
    image_file: ImageOcrPhotoRecognizeReceiptRequestBodyImageFile = field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass
class ImageOcrPhotoRecognizeReceiptSecurity:
    apikey: shared.SchemeApikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ImageOcrPhotoRecognizeReceiptRequest:
    headers: ImageOcrPhotoRecognizeReceiptHeaders = field(default=None)
    request: ImageOcrPhotoRecognizeReceiptRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: ImageOcrPhotoRecognizeReceiptSecurity = field(default=None)
    

@dataclass
class ImageOcrPhotoRecognizeReceiptResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    receipt_recognition_result: Optional[shared.ReceiptRecognitionResult] = field(default=None)
    status_code: int = field(default=None)
    
