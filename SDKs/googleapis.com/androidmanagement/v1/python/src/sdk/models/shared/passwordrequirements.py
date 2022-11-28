from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PasswordRequirementsPasswordQualityEnum(str, Enum):
    PASSWORD_QUALITY_UNSPECIFIED = "PASSWORD_QUALITY_UNSPECIFIED"
    BIOMETRIC_WEAK = "BIOMETRIC_WEAK"
    SOMETHING = "SOMETHING"
    NUMERIC = "NUMERIC"
    NUMERIC_COMPLEX = "NUMERIC_COMPLEX"
    ALPHABETIC = "ALPHABETIC"
    ALPHANUMERIC = "ALPHANUMERIC"
    COMPLEX = "COMPLEX"
    COMPLEXITY_LOW = "COMPLEXITY_LOW"
    COMPLEXITY_MEDIUM = "COMPLEXITY_MEDIUM"
    COMPLEXITY_HIGH = "COMPLEXITY_HIGH"

class PasswordRequirementsPasswordScopeEnum(str, Enum):
    SCOPE_UNSPECIFIED = "SCOPE_UNSPECIFIED"
    SCOPE_DEVICE = "SCOPE_DEVICE"
    SCOPE_PROFILE = "SCOPE_PROFILE"

class PasswordRequirementsRequirePasswordUnlockEnum(str, Enum):
    REQUIRE_PASSWORD_UNLOCK_UNSPECIFIED = "REQUIRE_PASSWORD_UNLOCK_UNSPECIFIED"
    USE_DEFAULT_DEVICE_TIMEOUT = "USE_DEFAULT_DEVICE_TIMEOUT"
    REQUIRE_EVERY_DAY = "REQUIRE_EVERY_DAY"

class PasswordRequirementsUnifiedLockSettingsEnum(str, Enum):
    UNIFIED_LOCK_SETTINGS_UNSPECIFIED = "UNIFIED_LOCK_SETTINGS_UNSPECIFIED"
    ALLOW_UNIFIED_WORK_AND_PERSONAL_LOCK = "ALLOW_UNIFIED_WORK_AND_PERSONAL_LOCK"
    REQUIRE_SEPARATE_WORK_LOCK = "REQUIRE_SEPARATE_WORK_LOCK"


@dataclass_json
@dataclass
class PasswordRequirements:
    r"""PasswordRequirements
    Requirements for the password used to unlock a device.
    """
    
    maximum_failed_passwords_for_wipe: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumFailedPasswordsForWipe') }})
    password_expiration_timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passwordExpirationTimeout') }})
    password_history_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passwordHistoryLength') }})
    password_minimum_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passwordMinimumLength') }})
    password_minimum_letters: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passwordMinimumLetters') }})
    password_minimum_lower_case: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passwordMinimumLowerCase') }})
    password_minimum_non_letter: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passwordMinimumNonLetter') }})
    password_minimum_numeric: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passwordMinimumNumeric') }})
    password_minimum_symbols: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passwordMinimumSymbols') }})
    password_minimum_upper_case: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passwordMinimumUpperCase') }})
    password_quality: Optional[PasswordRequirementsPasswordQualityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passwordQuality') }})
    password_scope: Optional[PasswordRequirementsPasswordScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passwordScope') }})
    require_password_unlock: Optional[PasswordRequirementsRequirePasswordUnlockEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requirePasswordUnlock') }})
    unified_lock_settings: Optional[PasswordRequirementsUnifiedLockSettingsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unifiedLockSettings') }})
    
