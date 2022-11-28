from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class TargetHealth:
    r"""TargetHealth
    Information about the connection health of an RDS Proxy target.
    """
    
    description: Optional[str] = field(default=None)
    reason: Optional[TargetHealthReasonEnum] = field(default=None)
    state: Optional[TargetStateEnum] = field(default=None)
    
