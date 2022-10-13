from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DataReplicationInfoReplicatedDisk:
    backlogged_storage_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backloggedStorageBytes' }})
    device_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceName' }})
    replicated_storage_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replicatedStorageBytes' }})
    rescanned_storage_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rescannedStorageBytes' }})
    total_storage_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalStorageBytes' }})
    
