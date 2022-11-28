from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DbParameterGroupsMessage:
    r"""DbParameterGroupsMessage
     Contains the result of a successful invocation of the <code>DescribeDBParameterGroups</code> action. 
    """
    
    db_parameter_groups: Optional[List[DbParameterGroup]] = field(default=None)
    marker: Optional[str] = field(default=None)
    
