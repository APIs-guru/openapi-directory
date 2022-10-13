from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import approvalurlinfo

class ProductsApproveRequestApprovedPermissionsEnum(str, Enum):
    CURRENT_PERMISSIONS_ONLY = "currentPermissionsOnly"
    ALL_PERMISSIONS = "allPermissions"


@dataclass_json
@dataclass
class ProductsApproveRequest:
    approval_url_info: Optional[approvalurlinfo.ApprovalURLInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approvalUrlInfo' }})
    approved_permissions: Optional[ProductsApproveRequestApprovedPermissionsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approvedPermissions' }})
    
