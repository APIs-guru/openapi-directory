from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class SecurityPostureDevicePostureEnum(str, Enum):
    POSTURE_UNSPECIFIED = "POSTURE_UNSPECIFIED"
    SECURE = "SECURE"
    AT_RISK = "AT_RISK"
    POTENTIALLY_COMPROMISED = "POTENTIALLY_COMPROMISED"


@dataclass_json
@dataclass
class SecurityPosture:
    r"""SecurityPosture
    The security posture of the device, as determined by the current device state and the policies applied.
    """
    
    device_posture: Optional[SecurityPostureDevicePostureEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('devicePosture') }})
    posture_details: Optional[List[PostureDetail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postureDetails') }})
    
