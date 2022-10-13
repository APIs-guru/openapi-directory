from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import inputlogevent


@dataclass_json
@dataclass
class PutLogEventsRequest:
    log_events: List[inputlogevent.InputLogEvent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logEvents' }})
    log_group_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logGroupName' }})
    log_stream_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logStreamName' }})
    sequence_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sequenceToken' }})
    
