from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DatePattern:
    day: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'day' }})
    month: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'month' }})
    year: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'year' }})
    
