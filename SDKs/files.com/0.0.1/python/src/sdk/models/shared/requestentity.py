from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RequestEntity:
    automation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'automation_id' }})
    destination: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    user_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_display_name' }})
    
