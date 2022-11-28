from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DbSnapshotMessage:
    db_snapshots: Optional[List[DbSnapshot]] = field(default=None)
    marker: Optional[str] = field(default=None)
    
