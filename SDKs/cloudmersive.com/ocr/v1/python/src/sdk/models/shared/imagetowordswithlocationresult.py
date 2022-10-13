from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import ocrwordelement


@dataclass_json
@dataclass
class ImageToWordsWithLocationResult:
    successful: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Successful' }})
    words: Optional[List[ocrwordelement.OcrWordElement]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Words' }})
    
