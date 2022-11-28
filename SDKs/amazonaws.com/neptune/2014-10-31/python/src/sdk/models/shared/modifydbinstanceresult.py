from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ModifyDbInstanceResult:
    db_instance: Optional[DbInstance] = field(default=None)
    
