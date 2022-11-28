from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DbClusterBacktrackMessage:
    r"""DbClusterBacktrackMessage
    Contains the result of a successful invocation of the <code>DescribeDBClusterBacktracks</code> action.
    """
    
    db_cluster_backtracks: Optional[List[DbClusterBacktrack]] = field(default=None)
    marker: Optional[str] = field(default=None)
    
