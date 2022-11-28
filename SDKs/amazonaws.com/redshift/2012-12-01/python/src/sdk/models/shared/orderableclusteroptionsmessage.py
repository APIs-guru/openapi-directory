from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class OrderableClusterOptionsMessage:
    r"""OrderableClusterOptionsMessage
    Contains the output from the <a>DescribeOrderableClusterOptions</a> action. 
    """
    
    marker: Optional[str] = field(default=None)
    orderable_cluster_options: Optional[List[OrderableClusterOption]] = field(default=None)
    
