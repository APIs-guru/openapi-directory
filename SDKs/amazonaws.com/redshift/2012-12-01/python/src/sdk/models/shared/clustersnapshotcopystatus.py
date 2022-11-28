from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ClusterSnapshotCopyStatus:
    r"""ClusterSnapshotCopyStatus
    Returns the destination region and retention period that are configured for cross-region snapshot copy.
    """
    
    destination_region: Optional[str] = field(default=None)
    manual_snapshot_retention_period: Optional[int] = field(default=None)
    retention_period: Optional[int] = field(default=None)
    snapshot_copy_grant_name: Optional[str] = field(default=None)
    
