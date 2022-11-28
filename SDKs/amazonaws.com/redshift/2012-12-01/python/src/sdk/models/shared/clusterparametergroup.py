from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ClusterParameterGroup:
    r"""ClusterParameterGroup
    Describes a parameter group.
    """
    
    description: Optional[str] = field(default=None)
    parameter_group_family: Optional[str] = field(default=None)
    parameter_group_name: Optional[str] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    
