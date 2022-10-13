from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RoleRolePrivileges:
    privilege_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privilegeName' }})
    service_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceId' }})
    

@dataclass_json
@dataclass
class Role:
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    is_super_admin_role: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isSuperAdminRole' }})
    is_system_role: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isSystemRole' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    role_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleDescription' }})
    role_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleId' }})
    role_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleName' }})
    role_privileges: Optional[List[RoleRolePrivileges]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rolePrivileges' }})
    
