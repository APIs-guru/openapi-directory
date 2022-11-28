from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class RestoreDbClusterFromS3Result:
    db_cluster: Optional[DbCluster] = field(default=None)
    
