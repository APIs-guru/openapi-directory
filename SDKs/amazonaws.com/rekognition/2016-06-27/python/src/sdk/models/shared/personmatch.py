from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import facematch
from . import persondetail


@dataclass_json
@dataclass
class PersonMatch:
    face_matches: Optional[List[facematch.FaceMatch]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FaceMatches' }})
    person: Optional[persondetail.PersonDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Person' }})
    timestamp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timestamp' }})
    
