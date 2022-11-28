from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class RestoreInfoSourceTypeEnum(str, Enum):
    RESTORE_SOURCE_TYPE_UNSPECIFIED = "RESTORE_SOURCE_TYPE_UNSPECIFIED"
    BACKUP = "BACKUP"


@dataclass_json
@dataclass
class RestoreInfo:
    r"""RestoreInfo
    Information about a table restore.
    """
    
    backup_info: Optional[BackupInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backupInfo') }})
    source_type: Optional[RestoreInfoSourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceType') }})
    
