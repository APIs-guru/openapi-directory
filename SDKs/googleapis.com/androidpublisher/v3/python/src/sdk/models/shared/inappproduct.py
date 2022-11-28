from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class InAppProductPurchaseTypeEnum(str, Enum):
    PURCHASE_TYPE_UNSPECIFIED = "purchaseTypeUnspecified"
    MANAGED_USER = "managedUser"
    SUBSCRIPTION = "subscription"

class InAppProductStatusEnum(str, Enum):
    STATUS_UNSPECIFIED = "statusUnspecified"
    ACTIVE = "active"
    INACTIVE = "inactive"


@dataclass_json
@dataclass
class InAppProduct:
    r"""InAppProduct
    An in-app product. The resource for InappproductsService.
    """
    
    default_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultLanguage') }})
    default_price: Optional[Price] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultPrice') }})
    grace_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gracePeriod') }})
    listings: Optional[dict[str, InAppProductListing]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listings') }})
    managed_product_taxes_and_compliance_settings: Optional[ManagedProductTaxAndComplianceSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedProductTaxesAndComplianceSettings') }})
    package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageName') }})
    prices: Optional[dict[str, Price]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prices') }})
    purchase_type: Optional[InAppProductPurchaseTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchaseType') }})
    sku: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    status: Optional[InAppProductStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    subscription_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptionPeriod') }})
    subscription_taxes_and_compliance_settings: Optional[SubscriptionTaxAndComplianceSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptionTaxesAndComplianceSettings') }})
    trial_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trialPeriod') }})
    
