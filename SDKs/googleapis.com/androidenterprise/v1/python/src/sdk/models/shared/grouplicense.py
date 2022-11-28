from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""GroupLicense
    Group license objects allow you to keep track of licenses (called entitlements) for both free and paid apps. For a free app, a group license is created when an enterprise admin first approves the product in Google Play or when the first entitlement for the product is created for a user via the API. For a paid app, a group license object is only created when an enterprise admin purchases the product in Google Play for the first time. Use the API to query group licenses. A Grouplicenses resource includes the total number of licenses purchased (paid apps only) and the total number of licenses currently in use. In other words, the total number of Entitlements that exist for the product. Only one group license object is created per product and group license objects are never deleted. If a product is unapproved, its group license remains. This allows enterprise admins to keep track of any remaining entitlements for the product.
    """
    
    acquisition_kind: Optional[GroupLicenseAcquisitionKindEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acquisitionKind') }})
    approval: Optional[GroupLicenseApprovalEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approval') }})
    num_provisioned: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numProvisioned') }})
    num_purchased: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numPurchased') }})
    permissions: Optional[GroupLicensePermissionsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productId') }})
    
