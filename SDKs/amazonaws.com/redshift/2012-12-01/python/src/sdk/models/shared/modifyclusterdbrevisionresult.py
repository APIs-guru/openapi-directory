from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ModifyClusterDbRevisionResult:
    cluster: Optional[Cluster] = field(default=None)
    
