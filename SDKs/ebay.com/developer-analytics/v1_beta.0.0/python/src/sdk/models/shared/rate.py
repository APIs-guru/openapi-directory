from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Rate:
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    remaining: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remaining' }})
    reset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reset' }})
    time_window: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeWindow' }})
    
