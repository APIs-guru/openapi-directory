from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import user


@dataclass_json
@dataclass
class Users:
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    trigger_event: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trigger_event' }})
    users: Optional[List[user.User]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'users' }})
    
