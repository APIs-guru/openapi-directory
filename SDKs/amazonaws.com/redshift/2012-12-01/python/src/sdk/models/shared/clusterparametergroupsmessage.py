from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ClusterParameterGroupsMessage:
    r"""ClusterParameterGroupsMessage
    Contains the output from the <a>DescribeClusterParameterGroups</a> action. 
    """
    
    marker: Optional[str] = field(default=None)
    parameter_groups: Optional[List[ClusterParameterGroup]] = field(default=None)
    
