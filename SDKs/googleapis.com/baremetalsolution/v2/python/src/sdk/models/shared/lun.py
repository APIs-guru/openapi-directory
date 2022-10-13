from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class LunMultiprotocolTypeEnum(str, Enum):
    MULTIPROTOCOL_TYPE_UNSPECIFIED = "MULTIPROTOCOL_TYPE_UNSPECIFIED"
    LINUX = "LINUX"

class LunStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    UPDATING = "UPDATING"
    READY = "READY"
    DELETING = "DELETING"

class LunStorageTypeEnum(str, Enum):
    STORAGE_TYPE_UNSPECIFIED = "STORAGE_TYPE_UNSPECIFIED"
    SSD = "SSD"
    HDD = "HDD"


@dataclass_json
@dataclass
class Lun:
    boot_lun: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bootLun' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    multiprotocol_type: Optional[LunMultiprotocolTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multiprotocolType' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    shareable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shareable' }})
    size_gb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sizeGb' }})
    state: Optional[LunStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    storage_type: Optional[LunStorageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storageType' }})
    storage_volume: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storageVolume' }})
    wwid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wwid' }})
    
