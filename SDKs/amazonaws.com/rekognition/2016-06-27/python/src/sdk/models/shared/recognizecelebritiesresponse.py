from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import celebrity
from . import orientationcorrection_enum
from . import comparedface


@dataclass_json
@dataclass
class RecognizeCelebritiesResponse:
    celebrity_faces: Optional[List[celebrity.Celebrity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CelebrityFaces' }})
    orientation_correction: Optional[orientationcorrection_enum.OrientationCorrectionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrientationCorrection' }})
    unrecognized_faces: Optional[List[comparedface.ComparedFace]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UnrecognizedFaces' }})
    
