from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CopyDbClusterParameterGroupResult:
    db_cluster_parameter_group: Optional[DbClusterParameterGroup] = field(default=None)
    
