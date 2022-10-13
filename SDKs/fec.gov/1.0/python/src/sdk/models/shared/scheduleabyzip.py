from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ScheduleAByZip:
    committee_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'committee_id' }})
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    cycle: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cycle' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    state_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state_full' }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    zip: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zip' }})
    
