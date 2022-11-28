from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ModifyGlobalClusterResult:
    global_cluster: Optional[GlobalCluster] = field(default=None)
    
