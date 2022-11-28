from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateDbClusterResult:
    db_cluster: Optional[DbCluster] = field(default=None)
    
