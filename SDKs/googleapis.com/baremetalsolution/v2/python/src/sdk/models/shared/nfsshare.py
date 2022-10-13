from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import allowedclient

class NfsShareStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    PROVISIONED = "PROVISIONED"
    CREATING = "CREATING"
    UPDATING = "UPDATING"
    DELETING = "DELETING"

class NfsShareStorageTypeEnum(str, Enum):
    STORAGE_TYPE_UNSPECIFIED = "STORAGE_TYPE_UNSPECIFIED"
    SSD = "SSD"
    HDD = "HDD"


@dataclass_json
@dataclass
class NfsShare:
    allowed_clients: Optional[List[allowedclient.AllowedClient]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedClients' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    nfs_share_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nfsShareId' }})
    requested_size_gib: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestedSizeGib' }})
    state: Optional[NfsShareStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    storage_type: Optional[NfsShareStorageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storageType' }})
    volume: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volume' }})
    
