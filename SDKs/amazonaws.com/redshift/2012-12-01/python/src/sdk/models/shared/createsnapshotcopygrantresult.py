from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateSnapshotCopyGrantResult:
    snapshot_copy_grant: Optional[SnapshotCopyGrant] = field(default=None)
    
