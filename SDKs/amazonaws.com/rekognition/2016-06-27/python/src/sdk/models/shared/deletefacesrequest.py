from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteFacesRequest:
    collection_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CollectionId' }})
    face_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FaceIds' }})
    
