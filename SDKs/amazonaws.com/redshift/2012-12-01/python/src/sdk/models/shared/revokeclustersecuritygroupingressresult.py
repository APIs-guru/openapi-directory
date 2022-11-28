from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class RevokeClusterSecurityGroupIngressResult:
    cluster_security_group: Optional[ClusterSecurityGroup] = field(default=None)
    
