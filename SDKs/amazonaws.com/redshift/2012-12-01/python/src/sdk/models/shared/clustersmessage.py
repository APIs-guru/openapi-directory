from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ClustersMessage:
    r"""ClustersMessage
    Contains the output from the <a>DescribeClusters</a> action. 
    """
    
    clusters: Optional[List[Cluster]] = field(default=None)
    marker: Optional[str] = field(default=None)
    
