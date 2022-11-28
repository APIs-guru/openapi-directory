from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class BatchModifyClusterSnapshotsOutputMessage:
    errors: Optional[List[SnapshotErrorMessage]] = field(default=None)
    resources: Optional[List[str]] = field(default=None)
    
