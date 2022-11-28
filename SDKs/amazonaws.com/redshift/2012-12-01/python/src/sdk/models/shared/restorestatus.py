from dataclasses import dataclass, field
from typing import Optional


@dataclass
class RestoreStatus:
    r"""RestoreStatus
    Describes the status of a cluster restore action. Returns null if the cluster was not created by restoring a snapshot.
    """
    
    current_restore_rate_in_mega_bytes_per_second: Optional[float] = field(default=None)
    elapsed_time_in_seconds: Optional[int] = field(default=None)
    estimated_time_to_completion_in_seconds: Optional[int] = field(default=None)
    progress_in_mega_bytes: Optional[int] = field(default=None)
    snapshot_size_in_mega_bytes: Optional[int] = field(default=None)
    status: Optional[str] = field(default=None)
    
