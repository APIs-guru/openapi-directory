from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DoubleRange:
    end: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    start: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    
