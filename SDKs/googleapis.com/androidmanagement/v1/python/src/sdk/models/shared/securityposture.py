from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import posturedetail

class SecurityPostureDevicePostureEnum(str, Enum):
    POSTURE_UNSPECIFIED = "POSTURE_UNSPECIFIED"
    SECURE = "SECURE"
    AT_RISK = "AT_RISK"
    POTENTIALLY_COMPROMISED = "POTENTIALLY_COMPROMISED"


@dataclass_json
@dataclass
class SecurityPosture:
    device_posture: Optional[SecurityPostureDevicePostureEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devicePosture' }})
    posture_details: Optional[List[posturedetail.PostureDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postureDetails' }})
    
