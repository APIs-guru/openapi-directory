from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import face


@dataclass_json
@dataclass
class FaceMatch:
    face: Optional[face.Face] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Face' }})
    similarity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Similarity' }})
    
