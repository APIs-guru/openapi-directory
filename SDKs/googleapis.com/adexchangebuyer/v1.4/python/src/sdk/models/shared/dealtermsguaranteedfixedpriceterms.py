from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DealTermsGuaranteedFixedPriceTerms:
    billing_info: Optional[DealTermsGuaranteedFixedPriceTermsBillingInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingInfo') }})
    fixed_prices: Optional[List[PricePerBuyer]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixedPrices') }})
    guaranteed_impressions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guaranteedImpressions') }})
    guaranteed_looks: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guaranteedLooks') }})
    minimum_daily_looks: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumDailyLooks') }})
    
