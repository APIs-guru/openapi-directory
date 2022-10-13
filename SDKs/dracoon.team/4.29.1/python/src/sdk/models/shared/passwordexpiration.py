from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PasswordExpiration:
    enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    max_password_age: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxPasswordAge' }})
    
