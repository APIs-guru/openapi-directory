from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AdvancedSecurityOverridesCommonCriteriaModeEnum(str, Enum):
    COMMON_CRITERIA_MODE_UNSPECIFIED = "COMMON_CRITERIA_MODE_UNSPECIFIED"
    COMMON_CRITERIA_MODE_DISABLED = "COMMON_CRITERIA_MODE_DISABLED"
    COMMON_CRITERIA_MODE_ENABLED = "COMMON_CRITERIA_MODE_ENABLED"

class AdvancedSecurityOverridesDeveloperSettingsEnum(str, Enum):
    DEVELOPER_SETTINGS_UNSPECIFIED = "DEVELOPER_SETTINGS_UNSPECIFIED"
    DEVELOPER_SETTINGS_DISABLED = "DEVELOPER_SETTINGS_DISABLED"
    DEVELOPER_SETTINGS_ALLOWED = "DEVELOPER_SETTINGS_ALLOWED"

class AdvancedSecurityOverridesGooglePlayProtectVerifyAppsEnum(str, Enum):
    GOOGLE_PLAY_PROTECT_VERIFY_APPS_UNSPECIFIED = "GOOGLE_PLAY_PROTECT_VERIFY_APPS_UNSPECIFIED"
    VERIFY_APPS_ENFORCED = "VERIFY_APPS_ENFORCED"
    VERIFY_APPS_USER_CHOICE = "VERIFY_APPS_USER_CHOICE"

class AdvancedSecurityOverridesUntrustedAppsPolicyEnum(str, Enum):
    UNTRUSTED_APPS_POLICY_UNSPECIFIED = "UNTRUSTED_APPS_POLICY_UNSPECIFIED"
    DISALLOW_INSTALL = "DISALLOW_INSTALL"
    ALLOW_INSTALL_IN_PERSONAL_PROFILE_ONLY = "ALLOW_INSTALL_IN_PERSONAL_PROFILE_ONLY"
    ALLOW_INSTALL_DEVICE_WIDE = "ALLOW_INSTALL_DEVICE_WIDE"


@dataclass_json
@dataclass
class AdvancedSecurityOverrides:
    r"""AdvancedSecurityOverrides
    Security policies set to secure values by default. To maintain the security posture of a device, we don't recommend overriding any of the default values.
    """
    
    common_criteria_mode: Optional[AdvancedSecurityOverridesCommonCriteriaModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commonCriteriaMode') }})
    developer_settings: Optional[AdvancedSecurityOverridesDeveloperSettingsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('developerSettings') }})
    google_play_protect_verify_apps: Optional[AdvancedSecurityOverridesGooglePlayProtectVerifyAppsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googlePlayProtectVerifyApps') }})
    personal_apps_that_can_read_work_notifications: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('personalAppsThatCanReadWorkNotifications') }})
    untrusted_apps_policy: Optional[AdvancedSecurityOverridesUntrustedAppsPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('untrustedAppsPolicy') }})
    
