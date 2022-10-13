from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GitTreeTree:
    mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mode' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    sha: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha' }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class GitTree:
    sha: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha' }})
    tree: List[GitTreeTree] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tree' }})
    truncated: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'truncated' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
