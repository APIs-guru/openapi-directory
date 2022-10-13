from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import price
from . import dealtermsguaranteedfixedpriceterms
from . import dealtermsnonguaranteedauctionterms
from . import dealtermsnonguaranteedfixedpriceterms
from . import dealtermsrubiconnonguaranteedterms


@dataclass_json
@dataclass
class DealTerms:
    branding_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'brandingType' }})
    cross_listed_external_deal_id_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'crossListedExternalDealIdType' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    estimated_gross_spend: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'estimatedGrossSpend' }})
    estimated_impressions_per_day: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'estimatedImpressionsPerDay' }})
    guaranteed_fixed_price_terms: Optional[dealtermsguaranteedfixedpriceterms.DealTermsGuaranteedFixedPriceTerms] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'guaranteedFixedPriceTerms' }})
    non_guaranteed_auction_terms: Optional[dealtermsnonguaranteedauctionterms.DealTermsNonGuaranteedAuctionTerms] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nonGuaranteedAuctionTerms' }})
    non_guaranteed_fixed_price_terms: Optional[dealtermsnonguaranteedfixedpriceterms.DealTermsNonGuaranteedFixedPriceTerms] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nonGuaranteedFixedPriceTerms' }})
    rubicon_non_guaranteed_terms: Optional[dealtermsrubiconnonguaranteedterms.DealTermsRubiconNonGuaranteedTerms] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rubiconNonGuaranteedTerms' }})
    seller_time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sellerTimeZone' }})
    
