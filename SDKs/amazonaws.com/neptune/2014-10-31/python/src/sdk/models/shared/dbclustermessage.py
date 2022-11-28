from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DbClusterMessage:
    db_clusters: Optional[List[DbCluster]] = field(default=None)
    marker: Optional[str] = field(default=None)
    
