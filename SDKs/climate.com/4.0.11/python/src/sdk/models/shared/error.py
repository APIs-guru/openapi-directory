from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ErrorError:
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class Error:
    error: Optional[ErrorError] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    
