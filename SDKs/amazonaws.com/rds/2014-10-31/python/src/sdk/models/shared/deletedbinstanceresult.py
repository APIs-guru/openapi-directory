from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DeleteDbInstanceResult:
    db_instance: Optional[DbInstance] = field(default=None)
    
