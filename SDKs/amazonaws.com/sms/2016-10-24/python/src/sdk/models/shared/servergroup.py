from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import server


@dataclass_json
@dataclass
class ServerGroup:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    server_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverGroupId' }})
    server_list: Optional[List[server.Server]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverList' }})
    
