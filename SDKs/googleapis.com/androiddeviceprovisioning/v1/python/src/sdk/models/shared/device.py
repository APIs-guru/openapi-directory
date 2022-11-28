from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Device:
    r"""Device
    An Android or Chrome OS device registered for zero-touch enrollment.
    """
    
    claims: Optional[List[DeviceClaim]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('claims') }})
    configuration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configuration') }})
    device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceId') }})
    device_identifier: Optional[DeviceIdentifier] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceIdentifier') }})
    device_metadata: Optional[DeviceMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceMetadata') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
