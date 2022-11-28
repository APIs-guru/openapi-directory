from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DescribeDefaultClusterParametersResult:
    default_cluster_parameters: Optional[DefaultClusterParameters] = field(default=None)
    
