from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import facedetail
from . import orientationcorrection_enum


@dataclass_json
@dataclass
class DetectFacesResponse:
    face_details: Optional[List[facedetail.FaceDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FaceDetails' }})
    orientation_correction: Optional[orientationcorrection_enum.OrientationCorrectionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrientationCorrection' }})
    
