from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import segment


@dataclass_json
@dataclass
class Trace:
    duration: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Duration' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    limit_exceeded: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LimitExceeded' }})
    segments: Optional[List[segment.Segment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Segments' }})
    
