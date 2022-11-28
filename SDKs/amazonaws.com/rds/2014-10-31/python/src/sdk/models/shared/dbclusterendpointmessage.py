from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DbClusterEndpointMessage:
    db_cluster_endpoints: Optional[List[DbClusterEndpoint]] = field(default=None)
    marker: Optional[str] = field(default=None)
    
