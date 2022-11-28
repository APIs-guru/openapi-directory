from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DbInstanceAutomatedBackupsReplication:
    r"""DbInstanceAutomatedBackupsReplication
    Automated backups of a DB instance replicated to another Amazon Web Services Region. They consist of system backups, transaction logs, and database instance properties.
    """
    
    db_instance_automated_backups_arn: Optional[str] = field(default=None)
    
