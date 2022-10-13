from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ChangeUserPasswordRequest:
    new_password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newPassword' }})
    old_password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oldPassword' }})
    
