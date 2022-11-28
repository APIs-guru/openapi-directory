from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateClusterParameterGroupResult:
    cluster_parameter_group: Optional[ClusterParameterGroup] = field(default=None)
    
