from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import nodepermissions


@dataclass_json
@dataclass
class RoomUsersAddBatchRequestItem:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    permissions: nodepermissions.NodePermissions = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    
