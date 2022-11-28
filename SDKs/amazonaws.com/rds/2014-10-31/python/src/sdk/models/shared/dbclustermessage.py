from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DbClusterMessage:
    r"""DbClusterMessage
    Contains the result of a successful invocation of the <code>DescribeDBClusters</code> action.
    """
    
    db_clusters: Optional[List[DbCluster]] = field(default=None)
    marker: Optional[str] = field(default=None)
    
