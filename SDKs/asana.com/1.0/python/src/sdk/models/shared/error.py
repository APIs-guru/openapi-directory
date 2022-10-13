from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Error:
    help: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'help' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    phrase: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phrase' }})
    
