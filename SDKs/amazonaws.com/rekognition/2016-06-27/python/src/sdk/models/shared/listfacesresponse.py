from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import face


@dataclass_json
@dataclass
class ListFacesResponse:
    face_model_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FaceModelVersion' }})
    faces: Optional[List[face.Face]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Faces' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
