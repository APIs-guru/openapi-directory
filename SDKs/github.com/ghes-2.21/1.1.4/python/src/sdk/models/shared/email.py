from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Email:
    email: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    primary: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary' }})
    verified: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verified' }})
    visibility: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visibility' }})
    
