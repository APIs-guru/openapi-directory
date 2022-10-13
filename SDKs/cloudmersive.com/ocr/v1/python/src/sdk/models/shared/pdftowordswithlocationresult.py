from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import ocrpageresultwithwordswithlocation


@dataclass_json
@dataclass
class PdfToWordsWithLocationResult:
    ocr_pages: Optional[List[ocrpageresultwithwordswithlocation.OcrPageResultWithWordsWithLocation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OcrPages' }})
    successful: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Successful' }})
    
