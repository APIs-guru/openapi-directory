from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""ClusterState
    The state of a table's data in a particular cluster.
    """
    
    encryption_info: Optional[List[EncryptionInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionInfo') }})
    replication_state: Optional[ClusterStateReplicationStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicationState') }})
    
