from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateDbClusterSnapshotResult:
    db_cluster_snapshot: Optional[DbClusterSnapshot] = field(default=None)
    
