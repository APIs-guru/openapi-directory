from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateDbSnapshotResult:
    db_snapshot: Optional[DbSnapshot] = field(default=None)
    
