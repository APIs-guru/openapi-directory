from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class RestoreTableFromClusterSnapshotResult:
    table_restore_status: Optional[TableRestoreStatus] = field(default=None)
    
