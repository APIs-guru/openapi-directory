from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SourceRegion:
    r"""SourceRegion
    Contains an Amazon Web Services Region name as the result of a successful call to the <code>DescribeSourceRegions</code> action.
    """
    
    endpoint: Optional[str] = field(default=None)
    region_name: Optional[str] = field(default=None)
    status: Optional[str] = field(default=None)
    supports_db_instance_automated_backups_replication: Optional[bool] = field(default=None)
    
