from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import ocrlineelement


@dataclass_json
@dataclass
class OcrPageResultWithLinesWithLocation:
    lines: Optional[List[ocrlineelement.OcrLineElement]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Lines' }})
    page_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PageNumber' }})
    successful: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Successful' }})
    
