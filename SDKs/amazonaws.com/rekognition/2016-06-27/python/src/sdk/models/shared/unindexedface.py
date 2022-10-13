from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import facedetail
from . import reason_enum


@dataclass_json
@dataclass
class UnindexedFace:
    face_detail: Optional[facedetail.FaceDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FaceDetail' }})
    reasons: Optional[List[reason_enum.ReasonEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Reasons' }})
    
