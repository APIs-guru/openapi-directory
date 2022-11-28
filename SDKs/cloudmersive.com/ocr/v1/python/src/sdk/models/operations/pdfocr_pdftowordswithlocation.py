from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PdfOcrPdfToWordsWithLocationHeaders:
    language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'language', 'style': 'simple', 'explode': False }})
    preprocessing: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'preprocessing', 'style': 'simple', 'explode': False }})
    

@dataclass
class PdfOcrPdfToWordsWithLocationRequestBodyImageFile:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    image_file: str = field(metadata={'multipart_form': { 'field_name': 'imageFile' }})
    

@dataclass
class PdfOcrPdfToWordsWithLocationRequestBody:
    image_file: PdfOcrPdfToWordsWithLocationRequestBodyImageFile = field(metadata={'multipart_form': { 'file': True }})
    

@dataclass
class PdfOcrPdfToWordsWithLocationSecurity:
    apikey: shared.SchemeApikey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PdfOcrPdfToWordsWithLocationRequest:
    headers: PdfOcrPdfToWordsWithLocationHeaders = field()
    request: PdfOcrPdfToWordsWithLocationRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: PdfOcrPdfToWordsWithLocationSecurity = field()
    

@dataclass
class PdfOcrPdfToWordsWithLocationResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    pdf_to_words_with_location_result: Optional[shared.PdfToWordsWithLocationResult] = field(default=None)
    
