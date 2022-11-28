from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FindDevicesByDeviceIdentifierRequest:
    r"""FindDevicesByDeviceIdentifierRequest
    Request to find devices.
    """
    
    device_identifier: Optional[DeviceIdentifier] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceIdentifier') }})
    limit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageToken') }})
    
