from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeviceAuthorizationCodeResponse:
    device_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('device_code') }})
    dl_masked_email: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dl_masked_email') }})
    dl_masked_mobile: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dl_masked_mobile') }})
    expires_in: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires_in') }})
    
