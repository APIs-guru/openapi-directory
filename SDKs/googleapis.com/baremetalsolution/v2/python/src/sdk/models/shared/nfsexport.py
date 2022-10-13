from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class NfsExportPermissionsEnum(str, Enum):
    PERMISSIONS_UNSPECIFIED = "PERMISSIONS_UNSPECIFIED"
    READ_ONLY = "READ_ONLY"
    READ_WRITE = "READ_WRITE"


@dataclass_json
@dataclass
class NfsExport:
    allow_dev: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowDev' }})
    allow_suid: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowSuid' }})
    cidr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cidr' }})
    machine_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'machineId' }})
    network_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkId' }})
    no_root_squash: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'noRootSquash' }})
    permissions: Optional[NfsExportPermissionsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    
