from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class EnterpriseAdminEnableOrDisableMaintenanceModeRequestBody:
    maintenance: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maintenance' }})
    

@dataclass
class EnterpriseAdminEnableOrDisableMaintenanceModeRequest:
    request: Optional[EnterpriseAdminEnableOrDisableMaintenanceModeRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminEnableOrDisableMaintenanceModeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    maintenance_status: Optional[shared.MaintenanceStatus] = field(default=None)
    
