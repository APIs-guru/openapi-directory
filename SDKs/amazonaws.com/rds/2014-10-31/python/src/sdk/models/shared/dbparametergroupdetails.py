from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DbParameterGroupDetails:
    r"""DbParameterGroupDetails
     Contains the result of a successful invocation of the <code>DescribeDBParameters</code> action. 
    """
    
    marker: Optional[str] = field(default=None)
    parameters: Optional[List[Parameter]] = field(default=None)
    
