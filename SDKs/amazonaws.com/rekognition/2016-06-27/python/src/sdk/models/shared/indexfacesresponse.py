from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IndexFacesResponse:
    face_model_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FaceModelVersion') }})
    face_records: Optional[List[FaceRecord]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FaceRecords') }})
    orientation_correction: Optional[OrientationCorrectionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrientationCorrection') }})
    unindexed_faces: Optional[List[UnindexedFace]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnindexedFaces') }})
    
