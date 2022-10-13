from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FilterLogEventsRequest:
    end_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    filter_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filterPattern' }})
    interleaved: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interleaved' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    log_group_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logGroupName' }})
    log_stream_name_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logStreamNamePrefix' }})
    log_stream_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logStreamNames' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    start_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    
