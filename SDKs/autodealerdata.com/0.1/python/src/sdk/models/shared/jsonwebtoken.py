from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class JSONWebToken:
    created_on: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdOn' }})
    expires: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expires' }})
    token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token' }})
    
