from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import replicationconfigurationreplicateddiskstagingdisktype_enum


@dataclass_json
@dataclass
class ReplicationConfigurationReplicatedDisk:
    device_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceName' }})
    iops: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iops' }})
    is_boot_disk: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isBootDisk' }})
    staging_disk_type: Optional[replicationconfigurationreplicateddiskstagingdisktype_enum.ReplicationConfigurationReplicatedDiskStagingDiskTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stagingDiskType' }})
    
