from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DbInstanceMessage:
    r"""DbInstanceMessage
     Contains the result of a successful invocation of the <code>DescribeDBInstances</code> action. 
    """
    
    db_instances: Optional[List[DbInstance]] = field(default=None)
    marker: Optional[str] = field(default=None)
    
