from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SearchFacesRequest:
    collection_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CollectionId' }})
    face_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FaceId' }})
    face_match_threshold: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FaceMatchThreshold' }})
    max_faces: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxFaces' }})
    
