from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import naventry
from . import navcontent


@dataclass_json
@dataclass
class NavEntry:
    children: Optional[List[naventry.NavEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'children' }})
    content: Optional[navcontent.NavContent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customFields' }})
    depth: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'depth' }})
    featured: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'featured' }})
    icon: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'icon' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    
