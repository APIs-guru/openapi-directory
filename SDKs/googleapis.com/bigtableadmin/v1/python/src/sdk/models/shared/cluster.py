from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import encryptionconfig

class ClusterDefaultStorageTypeEnum(str, Enum):
    STORAGE_TYPE_UNSPECIFIED = "STORAGE_TYPE_UNSPECIFIED"
    SSD = "SSD"
    HDD = "HDD"

class ClusterStateEnum(str, Enum):
    STATE_NOT_KNOWN = "STATE_NOT_KNOWN"
    READY = "READY"
    CREATING = "CREATING"
    RESIZING = "RESIZING"
    DISABLED = "DISABLED"


@dataclass_json
@dataclass
class Cluster:
    default_storage_type: Optional[ClusterDefaultStorageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultStorageType' }})
    encryption_config: Optional[encryptionconfig.EncryptionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionConfig' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    serve_nodes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serveNodes' }})
    state: Optional[ClusterStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
