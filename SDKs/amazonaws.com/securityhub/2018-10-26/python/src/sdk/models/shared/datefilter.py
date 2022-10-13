from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import daterange


@dataclass_json
@dataclass
class DateFilter:
    date_range: Optional[daterange.DateRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DateRange' }})
    end: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'End' }})
    start: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Start' }})
    
