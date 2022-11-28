from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DeviceSettingsEncryptionStatusEnum(str, Enum):
    ENCRYPTION_STATUS_UNSPECIFIED = "ENCRYPTION_STATUS_UNSPECIFIED"
    UNSUPPORTED = "UNSUPPORTED"
    INACTIVE = "INACTIVE"
    ACTIVATING = "ACTIVATING"
    ACTIVE = "ACTIVE"
    ACTIVE_DEFAULT_KEY = "ACTIVE_DEFAULT_KEY"
    ACTIVE_PER_USER = "ACTIVE_PER_USER"


@dataclass_json
@dataclass
class DeviceSettings:
    r"""DeviceSettings
    Information about security related device settings on device.
    """
    
    adb_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adbEnabled') }})
    development_settings_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('developmentSettingsEnabled') }})
    encryption_status: Optional[DeviceSettingsEncryptionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionStatus') }})
    is_device_secure: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isDeviceSecure') }})
    is_encrypted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isEncrypted') }})
    unknown_sources_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unknownSourcesEnabled') }})
    verify_apps_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verifyAppsEnabled') }})
    
