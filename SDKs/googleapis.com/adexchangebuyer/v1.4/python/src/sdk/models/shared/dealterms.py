from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DealTerms:
    branding_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brandingType') }})
    cross_listed_external_deal_id_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('crossListedExternalDealIdType') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    estimated_gross_spend: Optional[Price] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('estimatedGrossSpend') }})
    estimated_impressions_per_day: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('estimatedImpressionsPerDay') }})
    guaranteed_fixed_price_terms: Optional[DealTermsGuaranteedFixedPriceTerms] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guaranteedFixedPriceTerms') }})
    non_guaranteed_auction_terms: Optional[DealTermsNonGuaranteedAuctionTerms] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nonGuaranteedAuctionTerms') }})
    non_guaranteed_fixed_price_terms: Optional[DealTermsNonGuaranteedFixedPriceTerms] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nonGuaranteedFixedPriceTerms') }})
    rubicon_non_guaranteed_terms: Optional[DealTermsRubiconNonGuaranteedTerms] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rubiconNonGuaranteedTerms') }})
    seller_time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sellerTimeZone') }})
    
