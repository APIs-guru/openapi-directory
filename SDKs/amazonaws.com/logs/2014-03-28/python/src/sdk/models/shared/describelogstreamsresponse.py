from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import logstream


@dataclass_json
@dataclass
class DescribeLogStreamsResponse:
    log_streams: Optional[List[logstream.LogStream]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logStreams' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
