from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DataReplicationInfoReplicatedDisk:
    r"""DataReplicationInfoReplicatedDisk
    Request to query disks replicated.
    """
    
    backlogged_storage_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backloggedStorageBytes') }})
    device_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceName') }})
    replicated_storage_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicatedStorageBytes') }})
    rescanned_storage_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rescannedStorageBytes') }})
    total_storage_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalStorageBytes') }})
    
