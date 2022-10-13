from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MetaCursors:
    current: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous' }})
    

@dataclass_json
@dataclass
class Meta:
    cursors: Optional[MetaCursors] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cursors' }})
    items_on_page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items_on_page' }})
    
