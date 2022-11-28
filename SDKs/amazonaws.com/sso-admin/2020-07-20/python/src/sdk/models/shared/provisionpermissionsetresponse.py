from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProvisionPermissionSetResponse:
    permission_set_provisioning_status: Optional[PermissionSetProvisioningStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PermissionSetProvisioningStatus') }})
    
