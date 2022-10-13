from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EcTotalsByCandidate:
    candidate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidate_id' }})
    cycle: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cycle' }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    
