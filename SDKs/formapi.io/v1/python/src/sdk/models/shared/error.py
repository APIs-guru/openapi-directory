from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json

class ErrorStatusEnum(str, Enum):
    ERROR = "error"


@dataclass_json
@dataclass
class Error:
    error: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    status: ErrorStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
