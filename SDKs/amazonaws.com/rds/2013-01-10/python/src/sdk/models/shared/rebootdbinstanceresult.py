from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class RebootDbInstanceResult:
    db_instance: Optional[DbInstance] = field(default=None)
    
