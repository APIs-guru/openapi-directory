from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FileSystemConfig:
    arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    local_mount_path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocalMountPath' }})
    
