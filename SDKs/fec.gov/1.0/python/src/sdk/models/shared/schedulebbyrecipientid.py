from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ScheduleBByRecipientID:
    committee_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'committee_id' }})
    committee_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'committee_name' }})
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    cycle: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cycle' }})
    memo_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memo_count' }})
    memo_total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memo_total' }})
    recipient_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recipient_id' }})
    recipient_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recipient_name' }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    
