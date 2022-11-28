from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class SelectResult:
    items: Optional[List[Item]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
