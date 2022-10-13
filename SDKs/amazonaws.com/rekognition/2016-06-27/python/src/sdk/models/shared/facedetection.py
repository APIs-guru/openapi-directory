from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import facedetail


@dataclass_json
@dataclass
class FaceDetection:
    face: Optional[facedetail.FaceDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Face' }})
    timestamp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timestamp' }})
    
