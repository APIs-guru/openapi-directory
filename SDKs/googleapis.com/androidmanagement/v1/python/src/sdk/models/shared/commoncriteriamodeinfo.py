from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class CommonCriteriaModeInfoCommonCriteriaModeStatusEnum(str, Enum):
    COMMON_CRITERIA_MODE_STATUS_UNKNOWN = "COMMON_CRITERIA_MODE_STATUS_UNKNOWN"
    COMMON_CRITERIA_MODE_DISABLED = "COMMON_CRITERIA_MODE_DISABLED"
    COMMON_CRITERIA_MODE_ENABLED = "COMMON_CRITERIA_MODE_ENABLED"


@dataclass_json
@dataclass
class CommonCriteriaModeInfo:
    common_criteria_mode_status: Optional[CommonCriteriaModeInfoCommonCriteriaModeStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commonCriteriaModeStatus' }})
    
