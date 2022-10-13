from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import geometry


@dataclass_json
@dataclass
class ExpenseDetection:
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Confidence' }})
    geometry: Optional[geometry.Geometry] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Geometry' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Text' }})
    
