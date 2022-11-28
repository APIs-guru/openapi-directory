from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DbClusterCapacityInfo:
    current_capacity: Optional[int] = field(default=None)
    db_cluster_identifier: Optional[str] = field(default=None)
    pending_capacity: Optional[int] = field(default=None)
    seconds_before_timeout: Optional[int] = field(default=None)
    timeout_action: Optional[str] = field(default=None)
    
