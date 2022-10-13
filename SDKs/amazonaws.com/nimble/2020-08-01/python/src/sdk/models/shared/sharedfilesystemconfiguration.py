from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SharedFileSystemConfiguration:
    endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpoint' }})
    file_system_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileSystemId' }})
    linux_mount_point: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linuxMountPoint' }})
    share_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shareName' }})
    windows_mount_drive: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'windowsMountDrive' }})
    
