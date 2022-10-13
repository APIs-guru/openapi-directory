from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import lunrange
from . import nfsexport

class VolumeConfigProtocolEnum(str, Enum):
    PROTOCOL_UNSPECIFIED = "PROTOCOL_UNSPECIFIED"
    PROTOCOL_FC = "PROTOCOL_FC"
    PROTOCOL_NFS = "PROTOCOL_NFS"

class VolumeConfigTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    FLASH = "FLASH"
    DISK = "DISK"


@dataclass_json
@dataclass
class VolumeConfig:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    lun_ranges: Optional[List[lunrange.LunRange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lunRanges' }})
    machine_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'machineIds' }})
    nfs_exports: Optional[List[nfsexport.NfsExport]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nfsExports' }})
    protocol: Optional[VolumeConfigProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    size_gb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sizeGb' }})
    snapshots_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snapshotsEnabled' }})
    type: Optional[VolumeConfigTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    user_note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userNote' }})
    
