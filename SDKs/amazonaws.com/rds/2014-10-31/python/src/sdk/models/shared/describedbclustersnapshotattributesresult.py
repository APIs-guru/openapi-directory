from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DescribeDbClusterSnapshotAttributesResult:
    db_cluster_snapshot_attributes_result: Optional[DbClusterSnapshotAttributesResult] = field(default=None)
    
