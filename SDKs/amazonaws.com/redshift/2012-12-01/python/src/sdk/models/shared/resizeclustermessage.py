from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ResizeClusterMessage:
    r"""ResizeClusterMessage
    Describes a resize cluster operation. For example, a scheduled action to run the <code>ResizeCluster</code> API operation. 
    """
    
    cluster_identifier: str = field()
    classic: Optional[bool] = field(default=None)
    cluster_type: Optional[str] = field(default=None)
    node_type: Optional[str] = field(default=None)
    number_of_nodes: Optional[int] = field(default=None)
    
