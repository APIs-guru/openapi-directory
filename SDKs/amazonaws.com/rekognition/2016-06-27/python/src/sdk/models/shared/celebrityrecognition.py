from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import celebritydetail


@dataclass_json
@dataclass
class CelebrityRecognition:
    celebrity: Optional[celebritydetail.CelebrityDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Celebrity' }})
    timestamp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timestamp' }})
    
