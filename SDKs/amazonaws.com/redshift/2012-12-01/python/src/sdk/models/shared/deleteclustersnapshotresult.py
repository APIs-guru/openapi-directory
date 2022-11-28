from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DeleteClusterSnapshotResult:
    snapshot: Optional[Snapshot] = field(default=None)
    
