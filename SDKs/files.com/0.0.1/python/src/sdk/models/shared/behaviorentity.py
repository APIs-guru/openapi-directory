from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BehaviorEntity:
    attachment_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attachment_url' }})
    behavior: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'behavior' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    value: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
