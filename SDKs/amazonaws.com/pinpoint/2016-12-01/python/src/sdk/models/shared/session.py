from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Session:
    duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Duration' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    start_timestamp: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTimestamp' }})
    stop_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StopTimestamp' }})
    
