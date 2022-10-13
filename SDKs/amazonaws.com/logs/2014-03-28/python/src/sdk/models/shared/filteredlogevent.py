from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FilteredLogEvent:
    event_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventId' }})
    ingestion_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ingestionTime' }})
    log_stream_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logStreamName' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    timestamp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp' }})
    
