from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class RevokeDbSecurityGroupIngressResult:
    db_security_group: Optional[DbSecurityGroup] = field(default=None)
    
