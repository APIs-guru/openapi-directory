from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ThemeColor:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    opacity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'opacity' }})
    value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
