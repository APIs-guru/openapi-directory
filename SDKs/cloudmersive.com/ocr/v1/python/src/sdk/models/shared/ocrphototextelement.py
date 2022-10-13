from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import point


@dataclass_json
@dataclass
class OcrPhotoTextElement:
    bounding_points: Optional[List[point.Point]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BoundingPoints' }})
    confidence_level: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfidenceLevel' }})
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Height' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Text' }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Width' }})
    x_left: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'XLeft' }})
    y_top: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'YTop' }})
    
