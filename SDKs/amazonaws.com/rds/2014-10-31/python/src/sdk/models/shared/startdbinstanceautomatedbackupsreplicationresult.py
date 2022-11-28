from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class StartDbInstanceAutomatedBackupsReplicationResult:
    db_instance_automated_backup: Optional[DbInstanceAutomatedBackup] = field(default=None)
    
