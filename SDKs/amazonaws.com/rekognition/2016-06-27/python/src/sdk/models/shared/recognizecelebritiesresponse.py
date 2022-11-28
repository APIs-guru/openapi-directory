from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RecognizeCelebritiesResponse:
    celebrity_faces: Optional[List[Celebrity]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CelebrityFaces') }})
    orientation_correction: Optional[OrientationCorrectionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrientationCorrection') }})
    unrecognized_faces: Optional[List[ComparedFace]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnrecognizedFaces') }})
    
