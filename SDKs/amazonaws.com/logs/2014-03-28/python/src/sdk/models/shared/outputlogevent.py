from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OutputLogEvent:
    ingestion_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ingestionTime' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    timestamp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp' }})
    
