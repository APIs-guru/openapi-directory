from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import listeduser


@dataclass_json
@dataclass
class ListUsersResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    server_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerId' }})
    users: List[listeduser.ListedUser] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Users' }})
    
