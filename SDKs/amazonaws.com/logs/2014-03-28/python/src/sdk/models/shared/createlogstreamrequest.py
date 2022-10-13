from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateLogStreamRequest:
    log_group_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logGroupName' }})
    log_stream_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logStreamName' }})
    
