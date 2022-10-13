from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import backupinfo

class RestoreInfoSourceTypeEnum(str, Enum):
    RESTORE_SOURCE_TYPE_UNSPECIFIED = "RESTORE_SOURCE_TYPE_UNSPECIFIED"
    BACKUP = "BACKUP"


@dataclass_json
@dataclass
class RestoreInfo:
    backup_info: Optional[backupinfo.BackupInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backupInfo' }})
    source_type: Optional[RestoreInfoSourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceType' }})
    
