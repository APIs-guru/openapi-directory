from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ModifyClusterResult:
    cluster: Optional[Cluster] = field(default=None)
    
