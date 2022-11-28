from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PostureDetailSecurityRiskEnum(str, Enum):
    SECURITY_RISK_UNSPECIFIED = "SECURITY_RISK_UNSPECIFIED"
    UNKNOWN_OS = "UNKNOWN_OS"
    COMPROMISED_OS = "COMPROMISED_OS"
    HARDWARE_BACKED_EVALUATION_FAILED = "HARDWARE_BACKED_EVALUATION_FAILED"


@dataclass_json
@dataclass
class PostureDetail:
    r"""PostureDetail
    Additional details regarding the security posture of the device.
    """
    
    advice: Optional[List[UserFacingMessage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advice') }})
    security_risk: Optional[PostureDetailSecurityRiskEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityRisk') }})
    
