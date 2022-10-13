from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OcrPageResult:
    mean_confidence_level: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MeanConfidenceLevel' }})
    page_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PageNumber' }})
    text_result: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TextResult' }})
    
