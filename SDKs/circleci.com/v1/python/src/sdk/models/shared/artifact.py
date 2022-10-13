from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Artifact:
    node_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_index' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    pretty_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pretty_path' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
