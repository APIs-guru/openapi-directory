from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class RegionalTaxRateInfoTaxTierEnum(str, Enum):
    TAX_TIER_UNSPECIFIED = "TAX_TIER_UNSPECIFIED"
    TAX_TIER_BOOKS_1 = "TAX_TIER_BOOKS_1"
    TAX_TIER_NEWS_1 = "TAX_TIER_NEWS_1"
    TAX_TIER_NEWS_2 = "TAX_TIER_NEWS_2"
    TAX_TIER_MUSIC_OR_AUDIO_1 = "TAX_TIER_MUSIC_OR_AUDIO_1"
    TAX_TIER_LIVE_OR_BROADCAST_1 = "TAX_TIER_LIVE_OR_BROADCAST_1"


@dataclass_json
@dataclass
class RegionalTaxRateInfo:
    eligible_for_streaming_service_tax_rate: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eligibleForStreamingServiceTaxRate' }})
    tax_tier: Optional[RegionalTaxRateInfoTaxTierEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxTier' }})
    
