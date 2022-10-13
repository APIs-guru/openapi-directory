from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import ocrpageresult


@dataclass_json
@dataclass
class PdfToTextResponse:
    ocr_pages: Optional[List[ocrpageresult.OcrPageResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OcrPages' }})
    successful: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Successful' }})
    
