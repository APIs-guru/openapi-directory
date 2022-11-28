from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ClusterVersionsMessage:
    r"""ClusterVersionsMessage
    Contains the output from the <a>DescribeClusterVersions</a> action. 
    """
    
    cluster_versions: Optional[List[ClusterVersion]] = field(default=None)
    marker: Optional[str] = field(default=None)
    
