from dataclasses import dataclass, field
from typing import Any
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class File:
    dollar_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': '$id' }})
    dollar_permissions: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': '$permissions' }})
    date_created: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateCreated' }})
    mime_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mimeType' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    signature: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signature' }})
    size_original: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sizeOriginal' }})
    
