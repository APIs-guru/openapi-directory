from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PdfOcrPdfToWordsWithLocationHeaders:
    language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'language', 'style': 'simple', 'explode': False }})
    preprocessing: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'preprocessing', 'style': 'simple', 'explode': False }})
    

@dataclass
class PdfOcrPdfToWordsWithLocationRequestBodyImageFile:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    image_file: str = field(default=None, metadata={'multipart_form': { 'field_name': 'imageFile' }})
    

@dataclass
class PdfOcrPdfToWordsWithLocationRequestBody:
    image_file: PdfOcrPdfToWordsWithLocationRequestBodyImageFile = field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass
class PdfOcrPdfToWordsWithLocationSecurity:
    apikey: shared.SchemeApikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PdfOcrPdfToWordsWithLocationRequest:
    headers: PdfOcrPdfToWordsWithLocationHeaders = field(default=None)
    request: PdfOcrPdfToWordsWithLocationRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: PdfOcrPdfToWordsWithLocationSecurity = field(default=None)
    

@dataclass
class PdfOcrPdfToWordsWithLocationResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    pdf_to_words_with_location_result: Optional[shared.PdfToWordsWithLocationResult] = field(default=None)
    status_code: int = field(default=None)
    
