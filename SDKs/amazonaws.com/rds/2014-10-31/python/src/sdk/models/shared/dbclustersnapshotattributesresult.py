from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DbClusterSnapshotAttributesResult:
    r"""DbClusterSnapshotAttributesResult
    <p>Contains the results of a successful call to the <code>DescribeDBClusterSnapshotAttributes</code> API action.</p> <p>Manual DB cluster snapshot attributes are used to authorize other Amazon Web Services accounts to copy or restore a manual DB cluster snapshot. For more information, see the <code>ModifyDBClusterSnapshotAttribute</code> API action.</p>
    """
    
    db_cluster_snapshot_attributes: Optional[List[DbClusterSnapshotAttribute]] = field(default=None)
    db_cluster_snapshot_identifier: Optional[str] = field(default=None)
    
