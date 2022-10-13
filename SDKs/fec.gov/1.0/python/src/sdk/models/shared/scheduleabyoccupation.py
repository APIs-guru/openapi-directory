from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ScheduleAByOccupation:
    committee_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'committee_id' }})
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    cycle: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cycle' }})
    occupation: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'occupation' }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    
