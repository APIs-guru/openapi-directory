from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import ocrpageresultwithlineswithlocation


@dataclass_json
@dataclass
class PdfToLinesWithLocationResult:
    ocr_pages: Optional[List[ocrpageresultwithlineswithlocation.OcrPageResultWithLinesWithLocation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OcrPages' }})
    successful: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Successful' }})
    
