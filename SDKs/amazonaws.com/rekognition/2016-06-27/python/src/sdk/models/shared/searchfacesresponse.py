from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import facematch


@dataclass_json
@dataclass
class SearchFacesResponse:
    face_matches: Optional[List[facematch.FaceMatch]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FaceMatches' }})
    face_model_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FaceModelVersion' }})
    searched_face_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SearchedFaceId' }})
    
