from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import price
from . import inappproductlisting
from . import managedproducttaxandcompliancesettings
from . import price
from . import subscriptiontaxandcompliancesettings

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
    default_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultLanguage' }})
    default_price: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultPrice' }})
    grace_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gracePeriod' }})
    listings: Optional[dict[str, inappproductlisting.InAppProductListing]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listings' }})
    managed_product_taxes_and_compliance_settings: Optional[managedproducttaxandcompliancesettings.ManagedProductTaxAndComplianceSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managedProductTaxesAndComplianceSettings' }})
    package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packageName' }})
    prices: Optional[dict[str, price.Price]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prices' }})
    purchase_type: Optional[InAppProductPurchaseTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purchaseType' }})
    sku: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sku' }})
    status: Optional[InAppProductStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    subscription_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscriptionPeriod' }})
    subscription_taxes_and_compliance_settings: Optional[subscriptiontaxandcompliancesettings.SubscriptionTaxAndComplianceSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscriptionTaxesAndComplianceSettings' }})
    trial_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trialPeriod' }})
    
