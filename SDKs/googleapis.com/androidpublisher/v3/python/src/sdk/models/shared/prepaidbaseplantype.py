from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class PrepaidBasePlanTypeTimeExtensionEnum(str, Enum):
    TIME_EXTENSION_UNSPECIFIED = "TIME_EXTENSION_UNSPECIFIED"
    TIME_EXTENSION_ACTIVE = "TIME_EXTENSION_ACTIVE"
    TIME_EXTENSION_INACTIVE = "TIME_EXTENSION_INACTIVE"


@dataclass_json
@dataclass
class PrepaidBasePlanType:
    billing_period_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billingPeriodDuration' }})
    time_extension: Optional[PrepaidBasePlanTypeTimeExtensionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeExtension' }})
    
