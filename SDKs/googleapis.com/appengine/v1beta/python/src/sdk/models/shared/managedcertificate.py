from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""ManagedCertificate
    A certificate managed by App Engine.
    """
    
    last_renewal_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastRenewalTime') }})
    status: Optional[ManagedCertificateStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
