from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import servergroup
from . import tag


@dataclass_json
@dataclass
class CreateAppRequest:
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientToken' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    role_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleName' }})
    server_groups: Optional[List[servergroup.ServerGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverGroups' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
