from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Size:
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'height' }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    
