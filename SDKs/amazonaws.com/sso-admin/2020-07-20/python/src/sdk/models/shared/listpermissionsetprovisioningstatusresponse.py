from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import permissionsetprovisioningstatusmetadata


@dataclass_json
@dataclass
class ListPermissionSetProvisioningStatusResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    permission_sets_provisioning_status: Optional[List[permissionsetprovisioningstatusmetadata.PermissionSetProvisioningStatusMetadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PermissionSetsProvisioningStatus' }})
    
