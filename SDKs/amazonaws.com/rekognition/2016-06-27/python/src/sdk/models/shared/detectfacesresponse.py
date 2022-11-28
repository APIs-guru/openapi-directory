from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DetectFacesResponse:
    face_details: Optional[List[FaceDetail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FaceDetails') }})
    orientation_correction: Optional[OrientationCorrectionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrientationCorrection') }})
    
