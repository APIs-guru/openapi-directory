from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class EnterpriseAdminEnableOrDisableMaintenanceModeRequestBody:
    maintenance: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('maintenance') }})
    

@dataclass
class EnterpriseAdminEnableOrDisableMaintenanceModeRequest:
    request: Optional[EnterpriseAdminEnableOrDisableMaintenanceModeRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminEnableOrDisableMaintenanceModeResponse:
    content_type: str = field()
    status_code: int = field()
    maintenance_status: Optional[shared.MaintenanceStatus] = field(default=None)
    
