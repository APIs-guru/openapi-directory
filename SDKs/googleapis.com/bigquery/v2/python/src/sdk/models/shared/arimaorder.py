from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ArimaOrder:
    d: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'd' }})
    p: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'p' }})
    q: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'q' }})
    
