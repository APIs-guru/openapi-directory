from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class NonComplianceDetailConditionNonComplianceReasonEnum(str, Enum):
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


@dataclass_json
@dataclass
class NonComplianceDetailCondition:
    r"""NonComplianceDetailCondition
    A compliance rule condition which is satisfied if there exists any matching NonComplianceDetail for the device. A NonComplianceDetail matches a NonComplianceDetailCondition if all the fields which are set within the NonComplianceDetailCondition match the corresponding NonComplianceDetail fields.
    """
    
    non_compliance_reason: Optional[NonComplianceDetailConditionNonComplianceReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nonComplianceReason') }})
    package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageName') }})
    setting_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settingName') }})
    
