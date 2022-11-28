from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AccessReasonTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    CUSTOMER_INITIATED_SUPPORT = "CUSTOMER_INITIATED_SUPPORT"
    GOOGLE_INITIATED_SERVICE = "GOOGLE_INITIATED_SERVICE"
    GOOGLE_INITIATED_REVIEW = "GOOGLE_INITIATED_REVIEW"
    THIRD_PARTY_DATA_REQUEST = "THIRD_PARTY_DATA_REQUEST"
    GOOGLE_RESPONSE_TO_PRODUCTION_ALERT = "GOOGLE_RESPONSE_TO_PRODUCTION_ALERT"


@dataclass_json
@dataclass
class AccessReason:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    type: Optional[AccessReasonTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
