from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DbSubnetGroupMessage:
    db_subnet_groups: Optional[List[DbSubnetGroup]] = field(default=None)
    marker: Optional[str] = field(default=None)
    
