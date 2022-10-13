from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CommitActivity:
    days: List[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'days' }})
    total: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    week: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'week' }})
    
