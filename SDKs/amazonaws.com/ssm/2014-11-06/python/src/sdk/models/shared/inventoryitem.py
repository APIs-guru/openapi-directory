from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InventoryItem:
    capture_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CaptureTime' }})
    content: Optional[List[dict[str, str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Content' }})
    content_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContentHash' }})
    context: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Context' }})
    schema_version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaVersion' }})
    type_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TypeName' }})
    
