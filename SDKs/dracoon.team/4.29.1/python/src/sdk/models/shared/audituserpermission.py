from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import nodepermissions


@dataclass_json
@dataclass
class AuditUserPermission:
    permissions: nodepermissions.NodePermissions = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    user_first_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userFirstName' }})
    user_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    user_last_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userLastName' }})
    user_login: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userLogin' }})
    
