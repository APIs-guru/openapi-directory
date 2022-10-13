from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import clientuser


@dataclass_json
@dataclass
class ListClientUsersResponse:
    client_users: Optional[List[clientuser.ClientUser]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientUsers' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
