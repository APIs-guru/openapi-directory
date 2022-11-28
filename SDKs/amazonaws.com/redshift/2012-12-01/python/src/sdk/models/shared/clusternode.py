from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ClusterNode:
    r"""ClusterNode
    The identifier of a node in a cluster.
    """
    
    node_role: Optional[str] = field(default=None)
    private_ip_address: Optional[str] = field(default=None)
    public_ip_address: Optional[str] = field(default=None)
    
