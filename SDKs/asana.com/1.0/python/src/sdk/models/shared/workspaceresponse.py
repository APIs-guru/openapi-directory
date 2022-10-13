from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class WorkspaceResponse:
    email_domains: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email_domains' }})
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gid' }})
    is_organization: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_organization' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_type' }})
    
