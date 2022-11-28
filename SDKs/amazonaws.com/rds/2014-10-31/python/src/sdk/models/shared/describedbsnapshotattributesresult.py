from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DescribeDbSnapshotAttributesResult:
    db_snapshot_attributes_result: Optional[DbSnapshotAttributesResult] = field(default=None)
    
