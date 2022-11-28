from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ModifyClusterSnapshotResult:
    snapshot: Optional[Snapshot] = field(default=None)
    
