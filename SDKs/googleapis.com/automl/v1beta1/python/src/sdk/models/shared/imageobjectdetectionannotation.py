from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import boundingpoly


@dataclass_json
@dataclass
class ImageObjectDetectionAnnotation:
    bounding_box: Optional[boundingpoly.BoundingPoly] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boundingBox' }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'score' }})
    
