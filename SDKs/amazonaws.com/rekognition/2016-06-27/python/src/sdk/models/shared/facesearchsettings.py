from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FaceSearchSettings:
    collection_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CollectionId' }})
    face_match_threshold: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FaceMatchThreshold' }})
    
