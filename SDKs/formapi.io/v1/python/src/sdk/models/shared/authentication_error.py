from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AuthenticationErrorStatusEnum(str, Enum):
    ERROR = "error"


@dataclass_json
@dataclass
class AuthenticationError:
    error: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    status: Optional[AuthenticationErrorStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
