from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import authenticationmode
from . import tag


@dataclass_json
@dataclass
class CreateUserRequest:
    access_string: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessString' }})
    authentication_mode: authenticationmode.AuthenticationMode = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthenticationMode' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    user_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserName' }})
    
