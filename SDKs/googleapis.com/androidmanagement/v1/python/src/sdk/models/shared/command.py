from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import clearappsdataparams
from . import clearappsdatastatus

class CommandErrorCodeEnum(str, Enum):
    COMMAND_ERROR_CODE_UNSPECIFIED = "COMMAND_ERROR_CODE_UNSPECIFIED"
    UNKNOWN = "UNKNOWN"
    API_LEVEL = "API_LEVEL"
    MANAGEMENT_MODE = "MANAGEMENT_MODE"
    INVALID_VALUE = "INVALID_VALUE"
    UNSUPPORTED = "UNSUPPORTED"

class CommandResetPasswordFlagsEnum(str, Enum):
    RESET_PASSWORD_FLAG_UNSPECIFIED = "RESET_PASSWORD_FLAG_UNSPECIFIED"
    REQUIRE_ENTRY = "REQUIRE_ENTRY"
    DO_NOT_ASK_CREDENTIALS_ON_BOOT = "DO_NOT_ASK_CREDENTIALS_ON_BOOT"
    LOCK_NOW = "LOCK_NOW"

class CommandTypeEnum(str, Enum):
    COMMAND_TYPE_UNSPECIFIED = "COMMAND_TYPE_UNSPECIFIED"
    LOCK = "LOCK"
    RESET_PASSWORD = "RESET_PASSWORD"
    REBOOT = "REBOOT"
    RELINQUISH_OWNERSHIP = "RELINQUISH_OWNERSHIP"
    CLEAR_APP_DATA = "CLEAR_APP_DATA"


@dataclass_json
@dataclass
class Command:
    clear_apps_data_params: Optional[clearappsdataparams.ClearAppsDataParams] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clearAppsDataParams' }})
    clear_apps_data_status: Optional[clearappsdatastatus.ClearAppsDataStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clearAppsDataStatus' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    error_code: Optional[CommandErrorCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorCode' }})
    new_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newPassword' }})
    reset_password_flags: Optional[List[CommandResetPasswordFlagsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resetPasswordFlags' }})
    type: Optional[CommandTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userName' }})
    
