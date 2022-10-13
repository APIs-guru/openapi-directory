from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import resourcesharepermissionsummary


@dataclass_json
@dataclass
class ListPermissionsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    permissions: Optional[List[resourcesharepermissionsummary.ResourceSharePermissionSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    
