from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class AuthorizeClusterSecurityGroupIngressResult:
    cluster_security_group: Optional[ClusterSecurityGroup] = field(default=None)
    
