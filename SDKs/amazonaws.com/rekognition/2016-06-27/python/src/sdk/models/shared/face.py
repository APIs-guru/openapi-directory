from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import boundingbox


@dataclass_json
@dataclass
class Face:
    bounding_box: Optional[boundingbox.BoundingBox] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BoundingBox' }})
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Confidence' }})
    external_image_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExternalImageId' }})
    face_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FaceId' }})
    image_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageId' }})
    
