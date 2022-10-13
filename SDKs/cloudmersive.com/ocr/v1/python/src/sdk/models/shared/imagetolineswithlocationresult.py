from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import ocrlineelement


@dataclass_json
@dataclass
class ImageToLinesWithLocationResult:
    lines: Optional[List[ocrlineelement.OcrLineElement]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Lines' }})
    successful: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Successful' }})
    
