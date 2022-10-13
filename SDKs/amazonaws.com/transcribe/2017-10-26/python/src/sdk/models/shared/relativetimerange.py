from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RelativeTimeRange:
    end_percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndPercentage' }})
    first: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'First' }})
    last: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Last' }})
    start_percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartPercentage' }})
    
