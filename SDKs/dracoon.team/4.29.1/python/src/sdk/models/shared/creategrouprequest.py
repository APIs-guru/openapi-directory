from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import objectexpiration


@dataclass_json
@dataclass
class CreateGroupRequest:
    expiration: Optional[objectexpiration.ObjectExpiration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiration' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
