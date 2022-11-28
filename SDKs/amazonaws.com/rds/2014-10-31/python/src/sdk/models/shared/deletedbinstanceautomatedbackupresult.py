from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DeleteDbInstanceAutomatedBackupResult:
    db_instance_automated_backup: Optional[DbInstanceAutomatedBackup] = field(default=None)
    
