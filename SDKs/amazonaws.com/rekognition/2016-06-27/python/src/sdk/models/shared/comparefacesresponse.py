from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CompareFacesResponse:
    face_matches: Optional[List[CompareFacesMatch]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FaceMatches') }})
    source_image_face: Optional[ComparedSourceImageFace] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceImageFace') }})
    source_image_orientation_correction: Optional[OrientationCorrectionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceImageOrientationCorrection') }})
    target_image_orientation_correction: Optional[OrientationCorrectionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetImageOrientationCorrection') }})
    unmatched_faces: Optional[List[ComparedFace]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnmatchedFaces') }})
    
