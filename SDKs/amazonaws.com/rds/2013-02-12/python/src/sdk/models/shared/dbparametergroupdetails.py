from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DbParameterGroupDetails:
    marker: Optional[str] = field(default=None)
    parameters: Optional[List[Parameter]] = field(default=None)
    
