from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import boundingbox
from . import facedetail


@dataclass_json
@dataclass
class CelebrityDetail:
    bounding_box: Optional[boundingbox.BoundingBox] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BoundingBox' }})
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Confidence' }})
    face: Optional[facedetail.FaceDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Face' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    urls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Urls' }})
    
