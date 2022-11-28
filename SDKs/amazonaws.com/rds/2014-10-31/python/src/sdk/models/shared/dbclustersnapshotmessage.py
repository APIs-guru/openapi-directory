from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DbClusterSnapshotMessage:
    r"""DbClusterSnapshotMessage
     Provides a list of DB cluster snapshots for the user as the result of a call to the <code>DescribeDBClusterSnapshots</code> action. 
    """
    
    db_cluster_snapshots: Optional[List[DbClusterSnapshot]] = field(default=None)
    marker: Optional[str] = field(default=None)
    
