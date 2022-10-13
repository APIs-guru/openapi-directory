from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import encryptioninfo

class ClusterStateReplicationStateEnum(str, Enum):
    STATE_NOT_KNOWN = "STATE_NOT_KNOWN"
    INITIALIZING = "INITIALIZING"
    PLANNED_MAINTENANCE = "PLANNED_MAINTENANCE"
    UNPLANNED_MAINTENANCE = "UNPLANNED_MAINTENANCE"
    READY = "READY"
    READY_OPTIMIZING = "READY_OPTIMIZING"


@dataclass_json
@dataclass
class ClusterState:
    encryption_info: Optional[List[encryptioninfo.EncryptionInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionInfo' }})
    replication_state: Optional[ClusterStateReplicationStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replicationState' }})
    
