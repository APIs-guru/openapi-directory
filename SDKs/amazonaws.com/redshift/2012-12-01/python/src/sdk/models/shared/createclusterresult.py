from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateClusterResult:
    cluster: Optional[Cluster] = field(default=None)
    
