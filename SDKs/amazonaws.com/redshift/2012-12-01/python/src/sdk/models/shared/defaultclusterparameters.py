from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DefaultClusterParameters:
    r"""DefaultClusterParameters
    Describes the default cluster parameters for a parameter group family.
    """
    
    marker: Optional[str] = field(default=None)
    parameter_group_family: Optional[str] = field(default=None)
    parameters: Optional[List[Parameter]] = field(default=None)
    
