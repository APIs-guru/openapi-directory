from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CopyDbClusterSnapshotResult:
    db_cluster_snapshot: Optional[DbClusterSnapshot] = field(default=None)
    
