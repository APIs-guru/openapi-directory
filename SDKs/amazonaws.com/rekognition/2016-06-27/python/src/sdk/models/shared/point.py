from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Point:
    x: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'X' }})
    y: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Y' }})
    
