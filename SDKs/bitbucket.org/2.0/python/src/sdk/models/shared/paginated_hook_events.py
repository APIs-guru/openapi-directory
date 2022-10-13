from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import hook_event


@dataclass_json
@dataclass
class PaginatedHookEvents:
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    pagelen: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagelen' }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous' }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    values: Optional[List[hook_event.HookEvent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
