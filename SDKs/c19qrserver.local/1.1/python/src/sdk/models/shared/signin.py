from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Signin:
    dt: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dt' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    phone: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone' }})
    
