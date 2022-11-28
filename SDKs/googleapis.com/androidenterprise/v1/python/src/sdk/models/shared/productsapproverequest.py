from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ProductsApproveRequestApprovedPermissionsEnum(str, Enum):
    CURRENT_PERMISSIONS_ONLY = "currentPermissionsOnly"
    ALL_PERMISSIONS = "allPermissions"


@dataclass_json
@dataclass
class ProductsApproveRequest:
    approval_url_info: Optional[ApprovalURLInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvalUrlInfo') }})
    approved_permissions: Optional[ProductsApproveRequestApprovedPermissionsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvedPermissions') }})
    
