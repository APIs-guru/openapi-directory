from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PdfOcrPdfToLinesWithLocationHeaders:
    language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'language', 'style': 'simple', 'explode': False }})
    preprocessing: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'preprocessing', 'style': 'simple', 'explode': False }})
    

@dataclass
class PdfOcrPdfToLinesWithLocationRequestBodyImageFile:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    image_file: str = field(metadata={'multipart_form': { 'field_name': 'imageFile' }})
    

@dataclass
class PdfOcrPdfToLinesWithLocationRequestBody:
    image_file: PdfOcrPdfToLinesWithLocationRequestBodyImageFile = field(metadata={'multipart_form': { 'file': True }})
    

@dataclass
class PdfOcrPdfToLinesWithLocationSecurity:
    apikey: shared.SchemeApikey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PdfOcrPdfToLinesWithLocationRequest:
    headers: PdfOcrPdfToLinesWithLocationHeaders = field()
    request: PdfOcrPdfToLinesWithLocationRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: PdfOcrPdfToLinesWithLocationSecurity = field()
    

@dataclass
class PdfOcrPdfToLinesWithLocationResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    pdf_to_lines_with_location_result: Optional[shared.PdfToLinesWithLocationResult] = field(default=None)
    
