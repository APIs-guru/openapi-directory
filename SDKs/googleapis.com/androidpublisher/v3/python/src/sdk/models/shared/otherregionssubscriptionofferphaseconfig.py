from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OtherRegionsSubscriptionOfferPhaseConfig:
    r"""OtherRegionsSubscriptionOfferPhaseConfig
    Configuration for any new locations Play may launch in for a single offer phase.
    """
    
    absolute_discounts: Optional[OtherRegionsSubscriptionOfferPhasePrices] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('absoluteDiscounts') }})
    other_regions_prices: Optional[OtherRegionsSubscriptionOfferPhasePrices] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('otherRegionsPrices') }})
    relative_discount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relativeDiscount') }})
    
