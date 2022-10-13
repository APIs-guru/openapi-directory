from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AllowedClientMountPermissionsEnum(str, Enum):
    MOUNT_PERMISSIONS_UNSPECIFIED = "MOUNT_PERMISSIONS_UNSPECIFIED"
    READ = "READ"
    READ_WRITE = "READ_WRITE"


@dataclass_json
@dataclass
class AllowedClient:
    allow_dev: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowDev' }})
    allow_suid: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowSuid' }})
    allowed_clients_cidr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedClientsCidr' }})
    mount_permissions: Optional[AllowedClientMountPermissionsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mountPermissions' }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network' }})
    nfs_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nfsPath' }})
    no_root_squash: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'noRootSquash' }})
    share_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shareIp' }})
    
