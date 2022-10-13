from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import dealservingmetadatadealpausestatus


@dataclass_json
@dataclass
class DealServingMetadata:
    alcohol_ads_allowed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alcoholAdsAllowed' }})
    deal_pause_status: Optional[dealservingmetadatadealpausestatus.DealServingMetadataDealPauseStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dealPauseStatus' }})
    
