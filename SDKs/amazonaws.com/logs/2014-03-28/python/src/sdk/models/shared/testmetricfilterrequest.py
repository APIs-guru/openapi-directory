from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TestMetricFilterRequest:
    filter_pattern: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filterPattern' }})
    log_event_messages: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logEventMessages' }})
    
