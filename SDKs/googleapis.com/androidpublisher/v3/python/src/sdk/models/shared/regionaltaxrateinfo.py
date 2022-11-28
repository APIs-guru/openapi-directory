from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class RegionalTaxRateInfoStreamingTaxTypeEnum(str, Enum):
    STREAMING_TAX_TYPE_UNSPECIFIED = "STREAMING_TAX_TYPE_UNSPECIFIED"
    STREAMING_TAX_TYPE_TELCO_VIDEO_RENTAL = "STREAMING_TAX_TYPE_TELCO_VIDEO_RENTAL"
    STREAMING_TAX_TYPE_TELCO_VIDEO_SALES = "STREAMING_TAX_TYPE_TELCO_VIDEO_SALES"
    STREAMING_TAX_TYPE_TELCO_VIDEO_MULTI_CHANNEL = "STREAMING_TAX_TYPE_TELCO_VIDEO_MULTI_CHANNEL"
    STREAMING_TAX_TYPE_TELCO_AUDIO_RENTAL = "STREAMING_TAX_TYPE_TELCO_AUDIO_RENTAL"
    STREAMING_TAX_TYPE_TELCO_AUDIO_SALES = "STREAMING_TAX_TYPE_TELCO_AUDIO_SALES"
    STREAMING_TAX_TYPE_TELCO_AUDIO_MULTI_CHANNEL = "STREAMING_TAX_TYPE_TELCO_AUDIO_MULTI_CHANNEL"

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
    r"""RegionalTaxRateInfo
    Specified details about taxation in a given geographical region.
    """
    
    eligible_for_streaming_service_tax_rate: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eligibleForStreamingServiceTaxRate') }})
    streaming_tax_type: Optional[RegionalTaxRateInfoStreamingTaxTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streamingTaxType') }})
    tax_tier: Optional[RegionalTaxRateInfoTaxTierEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxTier') }})
    
