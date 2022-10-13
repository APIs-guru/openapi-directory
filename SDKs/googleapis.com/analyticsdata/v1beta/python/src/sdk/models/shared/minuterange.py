from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MinuteRange:
    end_minutes_ago: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endMinutesAgo' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    start_minutes_ago: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startMinutesAgo' }})
    
