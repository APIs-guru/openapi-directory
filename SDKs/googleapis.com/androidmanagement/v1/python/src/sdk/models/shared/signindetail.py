from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class SigninDetailAllowPersonalUsageEnum(str, Enum):
    ALLOW_PERSONAL_USAGE_UNSPECIFIED = "ALLOW_PERSONAL_USAGE_UNSPECIFIED"
    PERSONAL_USAGE_ALLOWED = "PERSONAL_USAGE_ALLOWED"
    PERSONAL_USAGE_DISALLOWED = "PERSONAL_USAGE_DISALLOWED"


@dataclass_json
@dataclass
class SigninDetail:
    allow_personal_usage: Optional[SigninDetailAllowPersonalUsageEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowPersonalUsage' }})
    qr_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'qrCode' }})
    signin_enrollment_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signinEnrollmentToken' }})
    signin_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signinUrl' }})
    
