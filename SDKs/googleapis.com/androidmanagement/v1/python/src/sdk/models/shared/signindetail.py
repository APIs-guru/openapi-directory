from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SigninDetailAllowPersonalUsageEnum(str, Enum):
    ALLOW_PERSONAL_USAGE_UNSPECIFIED = "ALLOW_PERSONAL_USAGE_UNSPECIFIED"
    PERSONAL_USAGE_ALLOWED = "PERSONAL_USAGE_ALLOWED"
    PERSONAL_USAGE_DISALLOWED = "PERSONAL_USAGE_DISALLOWED"


@dataclass_json
@dataclass
class SigninDetail:
    r"""SigninDetail
    A resource containing sign in details for an enterprise.
    """
    
    allow_personal_usage: Optional[SigninDetailAllowPersonalUsageEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowPersonalUsage') }})
    qr_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('qrCode') }})
    signin_enrollment_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signinEnrollmentToken') }})
    signin_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signinUrl') }})
    
