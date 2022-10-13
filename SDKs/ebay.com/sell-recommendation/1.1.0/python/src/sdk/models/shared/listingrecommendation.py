from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import marketingrecommendation


@dataclass_json
@dataclass
class ListingRecommendation:
    listing_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listingId' }})
    marketing: Optional[marketingrecommendation.MarketingRecommendation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marketing' }})
    
