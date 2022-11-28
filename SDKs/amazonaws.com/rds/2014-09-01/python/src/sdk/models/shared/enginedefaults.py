from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class EngineDefaults:
    db_parameter_group_family: Optional[str] = field(default=None)
    marker: Optional[str] = field(default=None)
    parameters: Optional[List[Parameter]] = field(default=None)
    
