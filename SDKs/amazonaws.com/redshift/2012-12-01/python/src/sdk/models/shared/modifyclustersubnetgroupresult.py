from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ModifyClusterSubnetGroupResult:
    cluster_subnet_group: Optional[ClusterSubnetGroup] = field(default=None)
    
