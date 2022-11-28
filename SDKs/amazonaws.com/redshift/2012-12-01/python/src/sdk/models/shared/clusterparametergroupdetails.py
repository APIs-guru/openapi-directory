from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ClusterParameterGroupDetails:
    r"""ClusterParameterGroupDetails
    Contains the output from the <a>DescribeClusterParameters</a> action. 
    """
    
    marker: Optional[str] = field(default=None)
    parameters: Optional[List[Parameter]] = field(default=None)
    
