from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PdfOcrPdfToLinesWithLocationHeaders:
    language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'language', 'style': 'simple', 'explode': False }})
    preprocessing: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'preprocessing', 'style': 'simple', 'explode': False }})
    

@dataclass
class PdfOcrPdfToLinesWithLocationRequestBodyImageFile:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    image_file: str = field(default=None, metadata={'multipart_form': { 'field_name': 'imageFile' }})
    

@dataclass
class PdfOcrPdfToLinesWithLocationRequestBody:
    image_file: PdfOcrPdfToLinesWithLocationRequestBodyImageFile = field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass
class PdfOcrPdfToLinesWithLocationSecurity:
    apikey: shared.SchemeApikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PdfOcrPdfToLinesWithLocationRequest:
    headers: PdfOcrPdfToLinesWithLocationHeaders = field(default=None)
    request: PdfOcrPdfToLinesWithLocationRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: PdfOcrPdfToLinesWithLocationSecurity = field(default=None)
    

@dataclass
class PdfOcrPdfToLinesWithLocationResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    pdf_to_lines_with_location_result: Optional[shared.PdfToLinesWithLocationResult] = field(default=None)
    status_code: int = field(default=None)
    
