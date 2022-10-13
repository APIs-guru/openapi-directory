from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ErrorResponse:
    code: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    debug_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'debugInfo' }})
    error_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorCode' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    
