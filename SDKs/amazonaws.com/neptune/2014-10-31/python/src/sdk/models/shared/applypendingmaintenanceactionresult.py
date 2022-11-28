from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ApplyPendingMaintenanceActionResult:
    resource_pending_maintenance_actions: Optional[ResourcePendingMaintenanceActions] = field(default=None)
    
