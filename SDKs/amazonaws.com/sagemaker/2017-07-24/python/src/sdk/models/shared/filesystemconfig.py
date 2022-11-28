from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FileSystemConfig:
    r"""FileSystemConfig
    The Amazon Elastic File System (EFS) storage configuration for a SageMaker image.
    """
    
    default_gid: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultGid') }})
    default_uid: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultUid') }})
    mount_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MountPath') }})
    
