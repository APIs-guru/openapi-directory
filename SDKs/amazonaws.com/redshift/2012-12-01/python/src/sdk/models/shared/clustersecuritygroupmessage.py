from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ClusterSecurityGroupMessage:
    r"""ClusterSecurityGroupMessage
    <p/>
    """
    
    cluster_security_groups: Optional[List[ClusterSecurityGroup]] = field(default=None)
    marker: Optional[str] = field(default=None)
    
