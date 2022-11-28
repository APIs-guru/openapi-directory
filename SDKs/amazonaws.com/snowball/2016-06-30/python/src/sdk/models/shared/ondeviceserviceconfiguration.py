from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OnDeviceServiceConfiguration:
    r"""OnDeviceServiceConfiguration
    An object that represents metadata and configuration settings for services on an AWS Snow Family device.
    """
    
    nfs_on_device_service: Optional[NfsOnDeviceServiceConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NFSOnDeviceService') }})
    
