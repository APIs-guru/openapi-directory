from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FilterLogEventsRequest:
    log_group_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('logGroupName') }})
    end_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    filter_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterPattern') }})
    interleaved: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interleaved') }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    log_stream_name_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logStreamNamePrefix') }})
    log_stream_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logStreamNames') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    start_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    
