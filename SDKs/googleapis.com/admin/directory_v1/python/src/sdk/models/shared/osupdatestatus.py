from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class OsUpdateStatusStateEnum(str, Enum):
    UPDATE_STATE_UNSPECIFIED = "updateStateUnspecified"
    UPDATE_STATE_NOT_STARTED = "updateStateNotStarted"
    UPDATE_STATE_DOWNLOAD_IN_PROGRESS = "updateStateDownloadInProgress"
    UPDATE_STATE_NEED_REBOOT = "updateStateNeedReboot"


@dataclass_json
@dataclass
class OsUpdateStatus:
    reboot_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rebootTime' }})
    state: Optional[OsUpdateStatusStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    target_kiosk_app_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetKioskAppVersion' }})
    target_os_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetOsVersion' }})
    update_check_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateCheckTime' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
