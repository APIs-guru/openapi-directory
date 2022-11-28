from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class OsUpdateStatusStateEnum(str, Enum):
    UPDATE_STATE_UNSPECIFIED = "updateStateUnspecified"
    UPDATE_STATE_NOT_STARTED = "updateStateNotStarted"
    UPDATE_STATE_DOWNLOAD_IN_PROGRESS = "updateStateDownloadInProgress"
    UPDATE_STATE_NEED_REBOOT = "updateStateNeedReboot"


@dataclass_json
@dataclass
class OsUpdateStatus:
    r"""OsUpdateStatus
    Contains information regarding the current OS update status.
    """
    
    reboot_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rebootTime') }})
    state: Optional[OsUpdateStatusStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    target_kiosk_app_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetKioskAppVersion') }})
    target_os_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetOsVersion') }})
    update_check_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateCheckTime') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
