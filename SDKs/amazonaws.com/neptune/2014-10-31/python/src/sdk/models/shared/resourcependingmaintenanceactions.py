from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ResourcePendingMaintenanceActions:
    r"""ResourcePendingMaintenanceActions
    Describes the pending maintenance actions for a resource.
    """
    
    pending_maintenance_action_details: Optional[List[PendingMaintenanceAction]] = field(default=None)
    resource_identifier: Optional[str] = field(default=None)
    
