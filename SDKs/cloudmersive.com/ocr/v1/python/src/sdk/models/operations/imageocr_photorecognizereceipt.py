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
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    image_file: str = field(metadata={'multipart_form': { 'field_name': 'imageFile' }})
    

@dataclass
class ImageOcrPhotoRecognizeReceiptRequestBody:
    image_file: ImageOcrPhotoRecognizeReceiptRequestBodyImageFile = field(metadata={'multipart_form': { 'file': True }})
    

@dataclass
class ImageOcrPhotoRecognizeReceiptSecurity:
    apikey: shared.SchemeApikey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ImageOcrPhotoRecognizeReceiptRequest:
    headers: ImageOcrPhotoRecognizeReceiptHeaders = field()
    request: ImageOcrPhotoRecognizeReceiptRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: ImageOcrPhotoRecognizeReceiptSecurity = field()
    

@dataclass
class ImageOcrPhotoRecognizeReceiptResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    receipt_recognition_result: Optional[shared.ReceiptRecognitionResult] = field(default=None)
    
