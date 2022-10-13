from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class InstallFailureEventFailureReasonEnum(str, Enum):
    UNKNOWN = "unknown"
    TIMEOUT = "timeout"


@dataclass_json
@dataclass
class InstallFailureEvent:
    device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceId' }})
    failure_details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureDetails' }})
    failure_reason: Optional[InstallFailureEventFailureReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureReason' }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productId' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    
