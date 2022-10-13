from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PhotoUrLs:
    h: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'h' }})
    l: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'l' }})
    s: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's' }})
    t: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 't' }})
    
