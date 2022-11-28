from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class StartDbInstanceResult:
    db_instance: Optional[DbInstance] = field(default=None)
    
