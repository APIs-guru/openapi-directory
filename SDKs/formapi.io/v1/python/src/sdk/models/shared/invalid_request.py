from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json

class InvalidRequestStatusEnum(str, Enum):
    ERROR = "error"


@dataclass_json
@dataclass
class InvalidRequest:
    errors: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    status: InvalidRequestStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
