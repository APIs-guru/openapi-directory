from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import face
from . import facedetail


@dataclass_json
@dataclass
class FaceRecord:
    face: Optional[face.Face] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Face' }})
    face_detail: Optional[facedetail.FaceDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FaceDetail' }})
    
