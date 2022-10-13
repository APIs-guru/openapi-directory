from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UserRecord:
    admin: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'admin' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    read_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'read_only' }})
    
