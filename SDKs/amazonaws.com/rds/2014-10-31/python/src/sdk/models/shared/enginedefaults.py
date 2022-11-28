from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class EngineDefaults:
    r"""EngineDefaults
     Contains the result of a successful invocation of the <code>DescribeEngineDefaultParameters</code> action. 
    """
    
    db_parameter_group_family: Optional[str] = field(default=None)
    marker: Optional[str] = field(default=None)
    parameters: Optional[List[Parameter]] = field(default=None)
    
