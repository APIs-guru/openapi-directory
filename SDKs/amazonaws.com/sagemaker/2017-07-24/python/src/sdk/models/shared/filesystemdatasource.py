from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import filesystemaccessmode_enum
from . import filesystemtype_enum


@dataclass_json
@dataclass
class FileSystemDataSource:
    directory_path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectoryPath' }})
    file_system_access_mode: filesystemaccessmode_enum.FileSystemAccessModeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FileSystemAccessMode' }})
    file_system_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FileSystemId' }})
    file_system_type: filesystemtype_enum.FileSystemTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FileSystemType' }})
    
