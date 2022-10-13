from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import facerecord
from . import orientationcorrection_enum
from . import unindexedface


@dataclass_json
@dataclass
class IndexFacesResponse:
    face_model_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FaceModelVersion' }})
    face_records: Optional[List[facerecord.FaceRecord]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FaceRecords' }})
    orientation_correction: Optional[orientationcorrection_enum.OrientationCorrectionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrientationCorrection' }})
    unindexed_faces: Optional[List[unindexedface.UnindexedFace]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UnindexedFaces' }})
    
