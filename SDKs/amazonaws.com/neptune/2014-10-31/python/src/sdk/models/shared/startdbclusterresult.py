from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class StartDbClusterResult:
    db_cluster: Optional[DbCluster] = field(default=None)
    
