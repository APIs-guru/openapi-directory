from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Endpoint:
    r"""Endpoint
    <p>Specifies a connection endpoint.</p> <p>For the data structure that represents Amazon Neptune DB cluster endpoints, see <code>DBClusterEndpoint</code>.</p>
    """
    
    address: Optional[str] = field(default=None)
    hosted_zone_id: Optional[str] = field(default=None)
    port: Optional[int] = field(default=None)
    
