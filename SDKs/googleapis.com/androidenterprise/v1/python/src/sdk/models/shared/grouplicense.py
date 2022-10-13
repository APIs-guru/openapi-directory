from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GroupLicenseAcquisitionKindEnum(str, Enum):
    FREE = "free"
    BULK_PURCHASE = "bulkPurchase"

class GroupLicenseApprovalEnum(str, Enum):
    APPROVED = "approved"
    UNAPPROVED = "unapproved"

class GroupLicensePermissionsEnum(str, Enum):
    CURRENT_APPROVED = "currentApproved"
    NEEDS_REAPPROVAL = "needsReapproval"
    ALL_CURRENT_AND_FUTURE_APPROVED = "allCurrentAndFutureApproved"


@dataclass_json
@dataclass
class GroupLicense:
    acquisition_kind: Optional[GroupLicenseAcquisitionKindEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acquisitionKind' }})
    approval: Optional[GroupLicenseApprovalEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approval' }})
    num_provisioned: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numProvisioned' }})
    num_purchased: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numPurchased' }})
    permissions: Optional[GroupLicensePermissionsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productId' }})
    
