from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ClusterSecurityGroup:
    r"""ClusterSecurityGroup
    Describes a security group.
    """
    
    cluster_security_group_name: Optional[str] = field(default=None)
    description: Optional[str] = field(default=None)
    ec2_security_groups: Optional[List[Ec2SecurityGroup]] = field(default=None)
    ip_ranges: Optional[List[IPRange]] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    
