from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ListDashboardsOutput:
    dashboard_entries: Optional[List[DashboardEntry]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
