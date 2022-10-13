from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import boundingbox
from . import facedetail


@dataclass_json
@dataclass
class PersonDetail:
    bounding_box: Optional[boundingbox.BoundingBox] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BoundingBox' }})
    face: Optional[facedetail.FaceDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Face' }})
    index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Index' }})
    
