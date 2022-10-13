from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateUserResponse:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    guid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'guid' }})
    
