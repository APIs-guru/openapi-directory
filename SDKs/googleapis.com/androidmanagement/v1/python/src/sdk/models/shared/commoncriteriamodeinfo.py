from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CommonCriteriaModeInfoCommonCriteriaModeStatusEnum(str, Enum):
    COMMON_CRITERIA_MODE_STATUS_UNKNOWN = "COMMON_CRITERIA_MODE_STATUS_UNKNOWN"
    COMMON_CRITERIA_MODE_DISABLED = "COMMON_CRITERIA_MODE_DISABLED"
    COMMON_CRITERIA_MODE_ENABLED = "COMMON_CRITERIA_MODE_ENABLED"


@dataclass_json
@dataclass
class CommonCriteriaModeInfo:
    r"""CommonCriteriaModeInfo
    Information about Common Criteria Mode—security standards defined in the Common Criteria for Information Technology Security Evaluation (https://www.commoncriteriaportal.org/) (CC).This information is only available if statusReportingSettings.commonCriteriaModeEnabled is true in the device's policy.
    """
    
    common_criteria_mode_status: Optional[CommonCriteriaModeInfoCommonCriteriaModeStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commonCriteriaModeStatus') }})
    
