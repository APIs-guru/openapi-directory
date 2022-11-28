from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FileSystemDataSource:
    r"""FileSystemDataSource
    Specifies a file system data source for a channel.
    """
    
    directory_path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryPath') }})
    file_system_access_mode: FileSystemAccessModeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileSystemAccessMode') }})
    file_system_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileSystemId') }})
    file_system_type: FileSystemTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileSystemType') }})
    
