from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Group:
    admin_created: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adminCreated' }})
    aliases: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aliases' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    direct_members_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directMembersCount' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    non_editable_aliases: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nonEditableAliases' }})
    
