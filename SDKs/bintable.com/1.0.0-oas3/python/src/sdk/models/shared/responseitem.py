from dataclasses import dataclass, field
from typing import Any
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ResponseItem:
    data: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    result: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    
