from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import serverevent


@dataclass_json
@dataclass
class DescribeEventsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    server_events: Optional[List[serverevent.ServerEvent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerEvents' }})
    
