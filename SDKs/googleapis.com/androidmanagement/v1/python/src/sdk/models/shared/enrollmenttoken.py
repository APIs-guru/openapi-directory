from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class EnrollmentTokenAllowPersonalUsageEnum(str, Enum):
    ALLOW_PERSONAL_USAGE_UNSPECIFIED = "ALLOW_PERSONAL_USAGE_UNSPECIFIED"
    PERSONAL_USAGE_ALLOWED = "PERSONAL_USAGE_ALLOWED"
    PERSONAL_USAGE_DISALLOWED = "PERSONAL_USAGE_DISALLOWED"


@dataclass_json
@dataclass
class EnrollmentToken:
    r"""EnrollmentToken
    An enrollment token.
    """
    
    additional_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalData') }})
    allow_personal_usage: Optional[EnrollmentTokenAllowPersonalUsageEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowPersonalUsage') }})
    duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    expiration_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expirationTimestamp') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    one_time_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oneTimeOnly') }})
    policy_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyName') }})
    qr_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('qrCode') }})
    user: Optional[User] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
