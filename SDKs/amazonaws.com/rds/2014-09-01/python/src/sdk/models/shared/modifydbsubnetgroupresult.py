from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ModifyDbSubnetGroupResult:
    db_subnet_group: Optional[DbSubnetGroup] = field(default=None)
    
