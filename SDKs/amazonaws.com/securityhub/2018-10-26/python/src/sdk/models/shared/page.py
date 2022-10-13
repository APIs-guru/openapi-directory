from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import range
from . import range


@dataclass_json
@dataclass
class Page:
    line_range: Optional[range.Range] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LineRange' }})
    offset_range: Optional[range.Range] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OffsetRange' }})
    page_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PageNumber' }})
    
