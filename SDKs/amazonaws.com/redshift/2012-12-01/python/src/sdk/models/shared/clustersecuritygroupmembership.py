from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ClusterSecurityGroupMembership:
    r"""ClusterSecurityGroupMembership
    Describes a cluster security group.
    """
    
    cluster_security_group_name: Optional[str] = field(default=None)
    status: Optional[str] = field(default=None)
    
