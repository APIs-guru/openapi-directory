from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import otherregionssubscriptionofferphaseprices
from . import otherregionssubscriptionofferphaseprices


@dataclass_json
@dataclass
class OtherRegionsSubscriptionOfferPhaseConfig:
    absolute_discounts: Optional[otherregionssubscriptionofferphaseprices.OtherRegionsSubscriptionOfferPhasePrices] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'absoluteDiscounts' }})
    other_regions_prices: Optional[otherregionssubscriptionofferphaseprices.OtherRegionsSubscriptionOfferPhasePrices] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'otherRegionsPrices' }})
    relative_discount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relativeDiscount' }})
    
