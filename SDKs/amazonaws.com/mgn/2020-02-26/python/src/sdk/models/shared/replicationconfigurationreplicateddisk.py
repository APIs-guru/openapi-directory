from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReplicationConfigurationReplicatedDisk:
    r"""ReplicationConfigurationReplicatedDisk
    Replication Configuration replicated disk.
    """
    
    device_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceName') }})
    iops: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iops') }})
    is_boot_disk: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isBootDisk') }})
    staging_disk_type: Optional[ReplicationConfigurationReplicatedDiskStagingDiskTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stagingDiskType') }})
    
