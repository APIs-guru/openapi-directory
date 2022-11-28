from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InAppProduct:
    default_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultLanguage') }})
    default_price: Optional[Price] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultPrice') }})
    grace_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gracePeriod') }})
    listings: Optional[dict[str, InAppProductListing]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listings') }})
    package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageName') }})
    prices: Optional[dict[str, Price]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prices') }})
    purchase_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchaseType') }})
    sku: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    subscription_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptionPeriod') }})
    trial_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trialPeriod') }})
    
