from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import permission_enum
from . import permission_enum
from . import datalakeprincipal
from . import resource


@dataclass_json
@dataclass
class GrantPermissionsRequest:
    catalog_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CatalogId' }})
    permissions: List[permission_enum.PermissionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Permissions' }})
    permissions_with_grant_option: Optional[List[permission_enum.PermissionEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PermissionsWithGrantOption' }})
    principal: datalakeprincipal.DataLakePrincipal = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Principal' }})
    resource: resource.Resource = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Resource' }})
    
