from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DbInstanceAutomatedBackupMessage:
    r"""DbInstanceAutomatedBackupMessage
     Contains the result of a successful invocation of the <code>DescribeDBInstanceAutomatedBackups</code> action. 
    """
    
    db_instance_automated_backups: Optional[List[DbInstanceAutomatedBackup]] = field(default=None)
    marker: Optional[str] = field(default=None)
    
