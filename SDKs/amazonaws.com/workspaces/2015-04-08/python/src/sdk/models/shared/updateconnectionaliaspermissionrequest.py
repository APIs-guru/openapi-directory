from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import connectionaliaspermission


@dataclass_json
@dataclass
class UpdateConnectionAliasPermissionRequest:
    alias_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AliasId' }})
    connection_alias_permission: connectionaliaspermission.ConnectionAliasPermission = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConnectionAliasPermission' }})
    
