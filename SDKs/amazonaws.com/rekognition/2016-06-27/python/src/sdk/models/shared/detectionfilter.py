from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DetectionFilter:
    min_bounding_box_height: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinBoundingBoxHeight' }})
    min_bounding_box_width: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinBoundingBoxWidth' }})
    min_confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinConfidence' }})
    
