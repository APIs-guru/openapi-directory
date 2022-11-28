from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class UsageLimitList:
    marker: Optional[str] = field(default=None)
    usage_limits: Optional[List[UsageLimit]] = field(default=None)
    
