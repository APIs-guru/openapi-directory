from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AllowedClientMountPermissionsEnum(str, Enum):
    MOUNT_PERMISSIONS_UNSPECIFIED = "MOUNT_PERMISSIONS_UNSPECIFIED"
    READ = "READ"
    READ_WRITE = "READ_WRITE"


@dataclass_json
@dataclass
class AllowedClient:
    r"""AllowedClient
    Represents an 'access point' for the share.
    """
    
    allow_dev: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowDev') }})
    allow_suid: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowSuid') }})
    allowed_clients_cidr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedClientsCidr') }})
    mount_permissions: Optional[AllowedClientMountPermissionsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mountPermissions') }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    nfs_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nfsPath') }})
    no_root_squash: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noRootSquash') }})
    share_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shareIp') }})
    

@dataclass_json
@dataclass
class AllowedClientInput:
    r"""AllowedClientInput
    Represents an 'access point' for the share.
    """
    
    allow_dev: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowDev') }})
    allow_suid: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowSuid') }})
    allowed_clients_cidr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedClientsCidr') }})
    mount_permissions: Optional[AllowedClientMountPermissionsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mountPermissions') }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    no_root_squash: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noRootSquash') }})
    
