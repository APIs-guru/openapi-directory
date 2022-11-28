from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class StartQueryRequest:
    end_time: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    query_string: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryString') }})
    start_time: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    log_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logGroupName') }})
    log_group_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logGroupNames') }})
    
