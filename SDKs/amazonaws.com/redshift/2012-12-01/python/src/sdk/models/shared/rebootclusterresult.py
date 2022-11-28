from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class RebootClusterResult:
    cluster: Optional[Cluster] = field(default=None)
    
