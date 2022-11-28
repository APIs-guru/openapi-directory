from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AccountDevices:
    devices: List[Device] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('devices') }})
    max_registered: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxRegistered') }})
    deregistration_window: Optional[DeviceRegistrationWindow] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deregistrationWindow') }})
    registration_window: Optional[DeviceRegistrationWindow] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrationWindow') }})
    
