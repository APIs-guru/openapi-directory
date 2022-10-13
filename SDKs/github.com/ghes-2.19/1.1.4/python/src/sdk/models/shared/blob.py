from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Blob:
    content: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    encoding: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encoding' }})
    highlighted_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'highlighted_content' }})
    node_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    sha: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha' }})
    size: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
