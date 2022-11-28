from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PrepaidBasePlanTypeTimeExtensionEnum(str, Enum):
    TIME_EXTENSION_UNSPECIFIED = "TIME_EXTENSION_UNSPECIFIED"
    TIME_EXTENSION_ACTIVE = "TIME_EXTENSION_ACTIVE"
    TIME_EXTENSION_INACTIVE = "TIME_EXTENSION_INACTIVE"


@dataclass_json
@dataclass
class PrepaidBasePlanType:
    r"""PrepaidBasePlanType
    Represents a base plan that does not automatically renew at the end of the base plan, and must be manually renewed by the user.
    """
    
    billing_period_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingPeriodDuration') }})
    time_extension: Optional[PrepaidBasePlanTypeTimeExtensionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeExtension') }})
    
