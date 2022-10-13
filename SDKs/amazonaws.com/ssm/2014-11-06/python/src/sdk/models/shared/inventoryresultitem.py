from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InventoryResultItem:
    capture_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CaptureTime' }})
    content: List[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Content' }})
    content_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContentHash' }})
    schema_version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaVersion' }})
    type_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TypeName' }})
    
