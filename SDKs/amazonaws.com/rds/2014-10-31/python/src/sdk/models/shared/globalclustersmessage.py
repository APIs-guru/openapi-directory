from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class GlobalClustersMessage:
    global_clusters: Optional[List[GlobalCluster]] = field(default=None)
    marker: Optional[str] = field(default=None)
    
