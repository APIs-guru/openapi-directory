from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ClusterSubnetGroup:
    r"""ClusterSubnetGroup
    Describes a subnet group.
    """
    
    cluster_subnet_group_name: Optional[str] = field(default=None)
    description: Optional[str] = field(default=None)
    subnet_group_status: Optional[str] = field(default=None)
    subnets: Optional[List[Subnet]] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    vpc_id: Optional[str] = field(default=None)
    
