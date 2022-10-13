from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    non_compliance_reason: Optional[NonComplianceDetailConditionNonComplianceReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nonComplianceReason' }})
    package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packageName' }})
    setting_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settingName' }})
    
