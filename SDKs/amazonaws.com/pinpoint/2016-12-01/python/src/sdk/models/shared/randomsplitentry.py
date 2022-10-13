from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RandomSplitEntry:
    next_activity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextActivity' }})
    percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Percentage' }})
    
