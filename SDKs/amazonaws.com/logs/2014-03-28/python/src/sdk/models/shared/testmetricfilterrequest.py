from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TestMetricFilterRequest:
    filter_pattern: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterPattern') }})
    log_event_messages: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('logEventMessages') }})
    
