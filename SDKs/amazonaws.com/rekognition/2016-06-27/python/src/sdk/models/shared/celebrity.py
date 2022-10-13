from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import comparedface
from . import knowngender


@dataclass_json
@dataclass
class Celebrity:
    face: Optional[comparedface.ComparedFace] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Face' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    known_gender: Optional[knowngender.KnownGender] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KnownGender' }})
    match_confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MatchConfidence' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    urls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Urls' }})
    
