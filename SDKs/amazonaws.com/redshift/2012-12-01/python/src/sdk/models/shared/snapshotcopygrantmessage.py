from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class SnapshotCopyGrantMessage:
    r"""SnapshotCopyGrantMessage
    <p/>
    """
    
    marker: Optional[str] = field(default=None)
    snapshot_copy_grants: Optional[List[SnapshotCopyGrant]] = field(default=None)
    
