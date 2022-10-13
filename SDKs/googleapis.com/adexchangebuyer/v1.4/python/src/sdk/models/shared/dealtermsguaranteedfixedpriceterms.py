from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dealtermsguaranteedfixedpricetermsbillinginfo
from . import priceperbuyer


@dataclass_json
@dataclass
class DealTermsGuaranteedFixedPriceTerms:
    billing_info: Optional[dealtermsguaranteedfixedpricetermsbillinginfo.DealTermsGuaranteedFixedPriceTermsBillingInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billingInfo' }})
    fixed_prices: Optional[List[priceperbuyer.PricePerBuyer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fixedPrices' }})
    guaranteed_impressions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'guaranteedImpressions' }})
    guaranteed_looks: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'guaranteedLooks' }})
    minimum_daily_looks: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimumDailyLooks' }})
    
