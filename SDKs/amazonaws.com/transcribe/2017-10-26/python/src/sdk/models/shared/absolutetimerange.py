from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AbsoluteTimeRange:
    end_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndTime' }})
    first: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'First' }})
    last: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Last' }})
    start_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTime' }})
    
