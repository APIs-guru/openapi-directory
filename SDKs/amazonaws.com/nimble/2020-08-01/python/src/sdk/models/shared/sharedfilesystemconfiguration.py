from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SharedFileSystemConfiguration:
    r"""SharedFileSystemConfiguration
    The configuration for a shared file storage system that is associated with a studio resource.
    """
    
    endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpoint') }})
    file_system_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileSystemId') }})
    linux_mount_point: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linuxMountPoint') }})
    share_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shareName') }})
    windows_mount_drive: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('windowsMountDrive') }})
    
