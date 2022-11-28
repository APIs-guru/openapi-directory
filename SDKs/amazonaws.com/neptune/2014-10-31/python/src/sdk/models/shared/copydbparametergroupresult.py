from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CopyDbParameterGroupResult:
    db_parameter_group: Optional[DbParameterGroup] = field(default=None)
    
