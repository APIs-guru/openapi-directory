from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PageSummary:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_static: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isStatic' }})
    is_system_page: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isSystemPage' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    template: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'template' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
