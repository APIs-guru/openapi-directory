from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SearchFacesByImageResponse:
    face_matches: Optional[List[FaceMatch]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FaceMatches') }})
    face_model_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FaceModelVersion') }})
    searched_face_bounding_box: Optional[BoundingBox] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SearchedFaceBoundingBox') }})
    searched_face_confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SearchedFaceConfidence') }})
    
