from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class PendingMaintenanceActionsMessage:
    r"""PendingMaintenanceActionsMessage
    Data returned from the <b>DescribePendingMaintenanceActions</b> action.
    """
    
    marker: Optional[str] = field(default=None)
    pending_maintenance_actions: Optional[List[ResourcePendingMaintenanceActions]] = field(default=None)
    
