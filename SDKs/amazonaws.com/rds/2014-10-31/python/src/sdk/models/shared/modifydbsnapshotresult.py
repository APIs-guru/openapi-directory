from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ModifyDbSnapshotResult:
    db_snapshot: Optional[DbSnapshot] = field(default=None)
    
