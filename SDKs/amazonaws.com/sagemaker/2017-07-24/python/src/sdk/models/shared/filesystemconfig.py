from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FileSystemConfig:
    default_gid: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultGid' }})
    default_uid: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultUid' }})
    mount_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MountPath' }})
    
