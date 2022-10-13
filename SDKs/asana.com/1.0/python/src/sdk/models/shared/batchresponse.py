from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BatchResponse:
    body: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    headers: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headers' }})
    status_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status_code' }})
    
