from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DbClusterParameterGroupDetails:
    r"""DbClusterParameterGroupDetails
    Provides details about a DB cluster parameter group including the parameters in the DB cluster parameter group.
    """
    
    marker: Optional[str] = field(default=None)
    parameters: Optional[List[Parameter]] = field(default=None)
    
