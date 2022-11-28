from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class SnapshotMessage:
    r"""SnapshotMessage
    Contains the output from the <a>DescribeClusterSnapshots</a> action. 
    """
    
    marker: Optional[str] = field(default=None)
    snapshots: Optional[List[Snapshot]] = field(default=None)
    
