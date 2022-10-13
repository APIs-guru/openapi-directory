from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PdfOcrPostHeaders:
    language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'language' }})
    preprocessing: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'preprocessing' }})
    recognition_mode: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'recognitionMode' }})
    

@dataclass
class PdfOcrPostRequestBodyImageFile:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    image_file: str = field(default=None, metadata={'multipart_form': { 'field_name': 'imageFile' }})
    

@dataclass
class PdfOcrPostRequestBody:
    image_file: PdfOcrPostRequestBodyImageFile = field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass
class PdfOcrPostSecurity:
    apikey: shared.SchemeApikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PdfOcrPostRequest:
    headers: PdfOcrPostHeaders = field(default=None)
    request: PdfOcrPostRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: PdfOcrPostSecurity = field(default=None)
    

@dataclass
class PdfOcrPostResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    pdf_to_text_response: Optional[shared.PdfToTextResponse] = field(default=None)
    status_code: int = field(default=None)
    
