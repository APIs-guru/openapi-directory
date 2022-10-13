from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import comparedface


@dataclass_json
@dataclass
class CompareFacesMatch:
    face: Optional[comparedface.ComparedFace] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Face' }})
    similarity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Similarity' }})
    
