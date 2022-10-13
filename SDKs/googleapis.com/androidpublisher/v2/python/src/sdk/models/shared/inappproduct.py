from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import price
from . import inappproductlisting
from . import price


@dataclass_json
@dataclass
class InAppProduct:
    default_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultLanguage' }})
    default_price: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultPrice' }})
    grace_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gracePeriod' }})
    listings: Optional[dict[str, inappproductlisting.InAppProductListing]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listings' }})
    package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packageName' }})
    prices: Optional[dict[str, price.Price]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prices' }})
    purchase_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purchaseType' }})
    sku: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sku' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    subscription_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscriptionPeriod' }})
    trial_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trialPeriod' }})
    
