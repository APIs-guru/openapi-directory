from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class StartDeviceAuthorizationResponse:
    device_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceCode') }})
    expires_in: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiresIn') }})
    interval: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interval') }})
    user_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userCode') }})
    verification_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verificationUri') }})
    verification_uri_complete: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verificationUriComplete') }})
    
