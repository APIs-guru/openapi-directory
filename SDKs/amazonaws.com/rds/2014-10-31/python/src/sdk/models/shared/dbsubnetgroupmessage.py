from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DbSubnetGroupMessage:
    r"""DbSubnetGroupMessage
     Contains the result of a successful invocation of the <code>DescribeDBSubnetGroups</code> action. 
    """
    
    db_subnet_groups: Optional[List[DbSubnetGroup]] = field(default=None)
    marker: Optional[str] = field(default=None)
    
