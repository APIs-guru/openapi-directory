from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PendingUserData:
    display_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    email: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    login: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'login' }})
    
