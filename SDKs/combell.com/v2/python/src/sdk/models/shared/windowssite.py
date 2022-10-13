from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import sitebinding


@dataclass_json
@dataclass
class WindowsSite:
    bindings: Optional[List[sitebinding.SiteBinding]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bindings' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    
