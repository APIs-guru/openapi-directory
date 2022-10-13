from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BoundingBox:
    height: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Height' }})
    left: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Left' }})
    top: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Top' }})
    width: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Width' }})
    
