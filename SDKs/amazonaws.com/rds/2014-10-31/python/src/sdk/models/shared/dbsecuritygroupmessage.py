from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DbSecurityGroupMessage:
    r"""DbSecurityGroupMessage
     Contains the result of a successful invocation of the <code>DescribeDBSecurityGroups</code> action. 
    """
    
    db_security_groups: Optional[List[DbSecurityGroup]] = field(default=None)
    marker: Optional[str] = field(default=None)
    
