from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import permissionsetprovisioningstatus


@dataclass_json
@dataclass
class ProvisionPermissionSetResponse:
    permission_set_provisioning_status: Optional[permissionsetprovisioningstatus.PermissionSetProvisioningStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PermissionSetProvisioningStatus' }})
    
