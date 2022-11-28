from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class DealTermsBrandingTypeEnum(str, Enum):
    BRANDING_TYPE_UNSPECIFIED = "BRANDING_TYPE_UNSPECIFIED"
    BRANDED = "BRANDED"
    SEMI_TRANSPARENT = "SEMI_TRANSPARENT"


@dataclass_json
@dataclass
class DealTerms:
    r"""DealTerms
    The deal terms specify the details of a Product/deal. They specify things like price per buyer, the type of pricing model (for example, fixed price, auction) and expected impressions from the publisher.
    """
    
    branding_type: Optional[DealTermsBrandingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brandingType') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    estimated_gross_spend: Optional[Price] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('estimatedGrossSpend') }})
    estimated_impressions_per_day: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('estimatedImpressionsPerDay') }})
    guaranteed_fixed_price_terms: Optional[GuaranteedFixedPriceTerms] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guaranteedFixedPriceTerms') }})
    non_guaranteed_auction_terms: Optional[NonGuaranteedAuctionTerms] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nonGuaranteedAuctionTerms') }})
    non_guaranteed_fixed_price_terms: Optional[NonGuaranteedFixedPriceTerms] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nonGuaranteedFixedPriceTerms') }})
    seller_time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sellerTimeZone') }})
    
