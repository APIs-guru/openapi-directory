from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import technicalcuetype_enum


@dataclass_json
@dataclass
class TechnicalCueSegment:
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Confidence' }})
    type: Optional[technicalcuetype_enum.TechnicalCueTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
