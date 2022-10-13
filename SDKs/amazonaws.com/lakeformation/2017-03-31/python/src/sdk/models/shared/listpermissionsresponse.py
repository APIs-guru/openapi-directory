from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import principalresourcepermissions


@dataclass_json
@dataclass
class ListPermissionsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    principal_resource_permissions: Optional[List[principalresourcepermissions.PrincipalResourcePermissions]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrincipalResourcePermissions' }})
    
