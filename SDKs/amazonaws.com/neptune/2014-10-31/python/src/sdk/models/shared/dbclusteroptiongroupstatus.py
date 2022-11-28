from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DbClusterOptionGroupStatus:
    r"""DbClusterOptionGroupStatus
    Not supported by Neptune.
    """
    
    db_cluster_option_group_name: Optional[str] = field(default=None)
    status: Optional[str] = field(default=None)
    
