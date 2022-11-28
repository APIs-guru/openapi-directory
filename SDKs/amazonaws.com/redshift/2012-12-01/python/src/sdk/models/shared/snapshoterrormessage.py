from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SnapshotErrorMessage:
    r"""SnapshotErrorMessage
    Describes the errors returned by a snapshot.
    """
    
    failure_code: Optional[str] = field(default=None)
    failure_reason: Optional[str] = field(default=None)
    snapshot_cluster_identifier: Optional[str] = field(default=None)
    snapshot_identifier: Optional[str] = field(default=None)
    
