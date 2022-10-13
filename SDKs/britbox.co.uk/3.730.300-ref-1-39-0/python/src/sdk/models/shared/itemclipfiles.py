from dataclasses import dataclass, field
from typing import Any,List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ItemClipFiles:
    clips: List[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clips' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    
