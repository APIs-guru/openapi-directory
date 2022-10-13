from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ScrapeResult:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    cursor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cursor' }})
    items: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    
