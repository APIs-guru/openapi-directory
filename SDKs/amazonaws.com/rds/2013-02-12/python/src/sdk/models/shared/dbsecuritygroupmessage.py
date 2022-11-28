from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DbSecurityGroupMessage:
    db_security_groups: Optional[List[DbSecurityGroup]] = field(default=None)
    marker: Optional[str] = field(default=None)
    
