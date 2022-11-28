from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateClusterSecurityGroupResult:
    cluster_security_group: Optional[ClusterSecurityGroup] = field(default=None)
    
