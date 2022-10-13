from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import deviceregistrationwindow
from . import device
from . import deviceregistrationwindow


@dataclass_json
@dataclass
class AccountDevices:
    deregistration_window: Optional[deviceregistrationwindow.DeviceRegistrationWindow] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deregistrationWindow' }})
    devices: List[device.Device] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devices' }})
    max_registered: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxRegistered' }})
    registration_window: Optional[deviceregistrationwindow.DeviceRegistrationWindow] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registrationWindow' }})
    
