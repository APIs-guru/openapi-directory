from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Streamingbuffer:
    estimated_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'estimatedBytes' }})
    estimated_rows: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'estimatedRows' }})
    oldest_entry_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oldestEntryTime' }})
    
