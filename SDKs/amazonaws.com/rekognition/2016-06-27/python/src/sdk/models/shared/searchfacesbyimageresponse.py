from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import facematch
from . import boundingbox


@dataclass_json
@dataclass
class SearchFacesByImageResponse:
    face_matches: Optional[List[facematch.FaceMatch]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FaceMatches' }})
    face_model_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FaceModelVersion' }})
    searched_face_bounding_box: Optional[boundingbox.BoundingBox] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SearchedFaceBoundingBox' }})
    searched_face_confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SearchedFaceConfidence' }})
    
