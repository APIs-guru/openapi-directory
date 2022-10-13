from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ImageOcrPhotoRecognizeFormAdvancedHeaders:
    bucket_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'bucketID' }})
    bucket_secret_key: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'bucketSecretKey' }})
    diagnostics: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'diagnostics' }})
    preprocessing: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'preprocessing' }})
    recognition_mode: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'recognitionMode' }})
    

@dataclass
class ImageOcrPhotoRecognizeFormAdvancedRequestBodyImageFile:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    image_file: str = field(default=None, metadata={'multipart_form': { 'field_name': 'imageFile' }})
    

@dataclass
class ImageOcrPhotoRecognizeFormAdvancedRequestBody:
    image_file: ImageOcrPhotoRecognizeFormAdvancedRequestBodyImageFile = field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass
class ImageOcrPhotoRecognizeFormAdvancedSecurity:
    apikey: shared.SchemeApikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ImageOcrPhotoRecognizeFormAdvancedRequest:
    headers: ImageOcrPhotoRecognizeFormAdvancedHeaders = field(default=None)
    request: ImageOcrPhotoRecognizeFormAdvancedRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: ImageOcrPhotoRecognizeFormAdvancedSecurity = field(default=None)
    

@dataclass
class ImageOcrPhotoRecognizeFormAdvancedResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    form_recognition_result: Optional[shared.FormRecognitionResult] = field(default=None)
    status_code: int = field(default=None)
    
