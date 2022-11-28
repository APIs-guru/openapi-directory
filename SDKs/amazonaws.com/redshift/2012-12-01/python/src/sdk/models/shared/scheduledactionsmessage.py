from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ScheduledActionsMessage:
    marker: Optional[str] = field(default=None)
    scheduled_actions: Optional[List[ScheduledAction]] = field(default=None)
    
