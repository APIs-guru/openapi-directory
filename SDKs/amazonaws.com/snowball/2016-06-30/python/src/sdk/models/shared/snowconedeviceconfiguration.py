from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SnowconeDeviceConfiguration:
    r"""SnowconeDeviceConfiguration
    Specifies the device configuration for an AWS Snowcone job. 
    """
    
    wireless_connection: Optional[WirelessConnection] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WirelessConnection') }})
    
