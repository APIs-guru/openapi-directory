from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EnterpriseAdminGetMaintenanceStatusResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    maintenance_status: Optional[shared.MaintenanceStatus] = field(default=None)
    
