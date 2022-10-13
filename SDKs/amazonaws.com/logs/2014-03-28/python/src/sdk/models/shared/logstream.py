from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LogStream:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    creation_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime' }})
    first_event_timestamp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstEventTimestamp' }})
    last_event_timestamp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastEventTimestamp' }})
    last_ingestion_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastIngestionTime' }})
    log_stream_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logStreamName' }})
    stored_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storedBytes' }})
    upload_sequence_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uploadSequenceToken' }})
    
