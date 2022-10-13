from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import userfacingmessage

class PostureDetailSecurityRiskEnum(str, Enum):
    SECURITY_RISK_UNSPECIFIED = "SECURITY_RISK_UNSPECIFIED"
    UNKNOWN_OS = "UNKNOWN_OS"
    COMPROMISED_OS = "COMPROMISED_OS"
    HARDWARE_BACKED_EVALUATION_FAILED = "HARDWARE_BACKED_EVALUATION_FAILED"


@dataclass_json
@dataclass
class PostureDetail:
    advice: Optional[List[userfacingmessage.UserFacingMessage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advice' }})
    security_risk: Optional[PostureDetailSecurityRiskEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityRisk' }})
    
