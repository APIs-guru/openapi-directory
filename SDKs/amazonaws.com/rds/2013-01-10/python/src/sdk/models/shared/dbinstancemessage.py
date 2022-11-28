from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DbInstanceMessage:
    db_instances: Optional[List[DbInstance]] = field(default=None)
    marker: Optional[str] = field(default=None)
    
