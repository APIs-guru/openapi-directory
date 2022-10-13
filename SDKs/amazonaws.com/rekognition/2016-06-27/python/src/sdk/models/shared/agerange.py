from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AgeRange:
    high: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'High' }})
    low: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Low' }})
    
