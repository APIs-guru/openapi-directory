from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PendingModifiedValues:
    r"""PendingModifiedValues
    Describes cluster attributes that are in a pending state. A change to one or more the attributes was requested and is in progress or will be applied.
    """
    
    automated_snapshot_retention_period: Optional[int] = field(default=None)
    cluster_identifier: Optional[str] = field(default=None)
    cluster_type: Optional[str] = field(default=None)
    cluster_version: Optional[str] = field(default=None)
    encryption_type: Optional[str] = field(default=None)
    enhanced_vpc_routing: Optional[bool] = field(default=None)
    maintenance_track_name: Optional[str] = field(default=None)
    master_user_password: Optional[str] = field(default=None)
    node_type: Optional[str] = field(default=None)
    number_of_nodes: Optional[int] = field(default=None)
    publicly_accessible: Optional[bool] = field(default=None)
    
