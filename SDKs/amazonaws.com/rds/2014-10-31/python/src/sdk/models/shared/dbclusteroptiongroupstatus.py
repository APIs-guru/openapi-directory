from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DbClusterOptionGroupStatus:
    r"""DbClusterOptionGroupStatus
    Contains status information for a DB cluster option group.
    """
    
    db_cluster_option_group_name: Optional[str] = field(default=None)
    status: Optional[str] = field(default=None)
    
