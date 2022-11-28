from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ClusterSubnetGroupMessage:
    r"""ClusterSubnetGroupMessage
    Contains the output from the <a>DescribeClusterSubnetGroups</a> action. 
    """
    
    cluster_subnet_groups: Optional[List[ClusterSubnetGroup]] = field(default=None)
    marker: Optional[str] = field(default=None)
    
