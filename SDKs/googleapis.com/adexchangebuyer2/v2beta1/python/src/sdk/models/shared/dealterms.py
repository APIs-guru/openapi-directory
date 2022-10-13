from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import price
from . import guaranteedfixedpriceterms
from . import nonguaranteedauctionterms
from . import nonguaranteedfixedpriceterms

class DealTermsBrandingTypeEnum(str, Enum):
    BRANDING_TYPE_UNSPECIFIED = "BRANDING_TYPE_UNSPECIFIED"
    BRANDED = "BRANDED"
    SEMI_TRANSPARENT = "SEMI_TRANSPARENT"


@dataclass_json
@dataclass
class DealTerms:
    branding_type: Optional[DealTermsBrandingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'brandingType' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    estimated_gross_spend: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'estimatedGrossSpend' }})
    estimated_impressions_per_day: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'estimatedImpressionsPerDay' }})
    guaranteed_fixed_price_terms: Optional[guaranteedfixedpriceterms.GuaranteedFixedPriceTerms] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'guaranteedFixedPriceTerms' }})
    non_guaranteed_auction_terms: Optional[nonguaranteedauctionterms.NonGuaranteedAuctionTerms] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nonGuaranteedAuctionTerms' }})
    non_guaranteed_fixed_price_terms: Optional[nonguaranteedfixedpriceterms.NonGuaranteedFixedPriceTerms] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nonGuaranteedFixedPriceTerms' }})
    seller_time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sellerTimeZone' }})
    
