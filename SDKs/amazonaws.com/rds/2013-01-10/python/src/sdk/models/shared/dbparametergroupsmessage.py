from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DbParameterGroupsMessage:
    db_parameter_groups: Optional[List[DbParameterGroup]] = field(default=None)
    marker: Optional[str] = field(default=None)
    
