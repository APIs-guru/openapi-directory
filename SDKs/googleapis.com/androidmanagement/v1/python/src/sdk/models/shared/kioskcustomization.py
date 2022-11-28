from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class KioskCustomizationDeviceSettingsEnum(str, Enum):
    DEVICE_SETTINGS_UNSPECIFIED = "DEVICE_SETTINGS_UNSPECIFIED"
    SETTINGS_ACCESS_ALLOWED = "SETTINGS_ACCESS_ALLOWED"
    SETTINGS_ACCESS_BLOCKED = "SETTINGS_ACCESS_BLOCKED"

class KioskCustomizationPowerButtonActionsEnum(str, Enum):
    POWER_BUTTON_ACTIONS_UNSPECIFIED = "POWER_BUTTON_ACTIONS_UNSPECIFIED"
    POWER_BUTTON_AVAILABLE = "POWER_BUTTON_AVAILABLE"
    POWER_BUTTON_BLOCKED = "POWER_BUTTON_BLOCKED"

class KioskCustomizationStatusBarEnum(str, Enum):
    STATUS_BAR_UNSPECIFIED = "STATUS_BAR_UNSPECIFIED"
    NOTIFICATIONS_AND_SYSTEM_INFO_ENABLED = "NOTIFICATIONS_AND_SYSTEM_INFO_ENABLED"
    NOTIFICATIONS_AND_SYSTEM_INFO_DISABLED = "NOTIFICATIONS_AND_SYSTEM_INFO_DISABLED"
    SYSTEM_INFO_ONLY = "SYSTEM_INFO_ONLY"

class KioskCustomizationSystemErrorWarningsEnum(str, Enum):
    SYSTEM_ERROR_WARNINGS_UNSPECIFIED = "SYSTEM_ERROR_WARNINGS_UNSPECIFIED"
    ERROR_AND_WARNINGS_ENABLED = "ERROR_AND_WARNINGS_ENABLED"
    ERROR_AND_WARNINGS_MUTED = "ERROR_AND_WARNINGS_MUTED"

class KioskCustomizationSystemNavigationEnum(str, Enum):
    SYSTEM_NAVIGATION_UNSPECIFIED = "SYSTEM_NAVIGATION_UNSPECIFIED"
    NAVIGATION_ENABLED = "NAVIGATION_ENABLED"
    NAVIGATION_DISABLED = "NAVIGATION_DISABLED"
    HOME_BUTTON_ONLY = "HOME_BUTTON_ONLY"


@dataclass_json
@dataclass
class KioskCustomization:
    r"""KioskCustomization
    Settings controlling the behavior of a device in kiosk mode. To enable kiosk mode, set kioskCustomLauncherEnabled to true or specify an app in the policy with installType KIOSK.
    """
    
    device_settings: Optional[KioskCustomizationDeviceSettingsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceSettings') }})
    power_button_actions: Optional[KioskCustomizationPowerButtonActionsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('powerButtonActions') }})
    status_bar: Optional[KioskCustomizationStatusBarEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusBar') }})
    system_error_warnings: Optional[KioskCustomizationSystemErrorWarningsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('systemErrorWarnings') }})
    system_navigation: Optional[KioskCustomizationSystemNavigationEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('systemNavigation') }})
    
