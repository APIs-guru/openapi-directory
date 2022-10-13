from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ContentReferenceAttachment:
    body: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    node_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
