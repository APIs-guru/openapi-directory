from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import selfservicepermissions


@dataclass_json
@dataclass
class ModifySelfservicePermissionsRequest:
    resource_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceId' }})
    selfservice_permissions: selfservicepermissions.SelfservicePermissions = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SelfservicePermissions' }})
    
