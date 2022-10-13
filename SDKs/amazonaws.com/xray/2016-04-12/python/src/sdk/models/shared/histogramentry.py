from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class HistogramEntry:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Count' }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
