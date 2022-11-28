from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class NonComplianceDetailInstallationFailureReasonEnum(str, Enum):
    INSTALLATION_FAILURE_REASON_UNSPECIFIED = "INSTALLATION_FAILURE_REASON_UNSPECIFIED"
    INSTALLATION_FAILURE_REASON_UNKNOWN = "INSTALLATION_FAILURE_REASON_UNKNOWN"
    IN_PROGRESS = "IN_PROGRESS"
    NOT_FOUND = "NOT_FOUND"
    NOT_COMPATIBLE_WITH_DEVICE = "NOT_COMPATIBLE_WITH_DEVICE"
    NOT_APPROVED = "NOT_APPROVED"
    PERMISSIONS_NOT_ACCEPTED = "PERMISSIONS_NOT_ACCEPTED"
    NOT_AVAILABLE_IN_COUNTRY = "NOT_AVAILABLE_IN_COUNTRY"
    NO_LICENSES_REMAINING = "NO_LICENSES_REMAINING"
    NOT_ENROLLED = "NOT_ENROLLED"
    USER_INVALID = "USER_INVALID"

class NonComplianceDetailNonComplianceReasonEnum(str, Enum):
    NON_COMPLIANCE_REASON_UNSPECIFIED = "NON_COMPLIANCE_REASON_UNSPECIFIED"
    API_LEVEL = "API_LEVEL"
    MANAGEMENT_MODE = "MANAGEMENT_MODE"
    USER_ACTION = "USER_ACTION"
    INVALID_VALUE = "INVALID_VALUE"
    APP_NOT_INSTALLED = "APP_NOT_INSTALLED"
    UNSUPPORTED = "UNSUPPORTED"
    APP_INSTALLED = "APP_INSTALLED"
    PENDING = "PENDING"
    APP_INCOMPATIBLE = "APP_INCOMPATIBLE"
    APP_NOT_UPDATED = "APP_NOT_UPDATED"

class NonComplianceDetailSpecificNonComplianceReasonEnum(str, Enum):
    SPECIFIC_NON_COMPLIANCE_REASON_UNSPECIFIED = "SPECIFIC_NON_COMPLIANCE_REASON_UNSPECIFIED"
    PASSWORD_POLICIES_USER_CREDENTIALS_CONFIRMATION_REQUIRED = "PASSWORD_POLICIES_USER_CREDENTIALS_CONFIRMATION_REQUIRED"
    PASSWORD_POLICIES_PASSWORD_EXPIRED = "PASSWORD_POLICIES_PASSWORD_EXPIRED"
    PASSWORD_POLICIES_PASSWORD_NOT_SUFFICIENT = "PASSWORD_POLICIES_PASSWORD_NOT_SUFFICIENT"
    ONC_WIFI_INVALID_VALUE = "ONC_WIFI_INVALID_VALUE"
    ONC_WIFI_API_LEVEL = "ONC_WIFI_API_LEVEL"


@dataclass_json
@dataclass
class NonComplianceDetail:
    r"""NonComplianceDetail
    Provides detail about non-compliance with a policy setting.
    """
    
    current_value: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentValue') }})
    field_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldPath') }})
    installation_failure_reason: Optional[NonComplianceDetailInstallationFailureReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('installationFailureReason') }})
    non_compliance_reason: Optional[NonComplianceDetailNonComplianceReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nonComplianceReason') }})
    package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageName') }})
    setting_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settingName') }})
    specific_non_compliance_context: Optional[SpecificNonComplianceContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('specificNonComplianceContext') }})
    specific_non_compliance_reason: Optional[NonComplianceDetailSpecificNonComplianceReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('specificNonComplianceReason') }})
    
