from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StartQueryRequest:
    end_time: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    log_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logGroupName' }})
    log_group_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logGroupNames' }})
    query_string: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryString' }})
    start_time: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    
