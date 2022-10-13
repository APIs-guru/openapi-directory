from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ManagedCertificateStatusEnum(str, Enum):
    MANAGEMENT_STATUS_UNSPECIFIED = "MANAGEMENT_STATUS_UNSPECIFIED"
    OK = "OK"
    PENDING = "PENDING"
    FAILED_RETRYING_NOT_VISIBLE = "FAILED_RETRYING_NOT_VISIBLE"
    FAILED_PERMANENT = "FAILED_PERMANENT"
    FAILED_RETRYING_CAA_FORBIDDEN = "FAILED_RETRYING_CAA_FORBIDDEN"
    FAILED_RETRYING_CAA_CHECKING = "FAILED_RETRYING_CAA_CHECKING"


@dataclass_json
@dataclass
class ManagedCertificate:
    last_renewal_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastRenewalTime' }})
    status: Optional[ManagedCertificateStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
