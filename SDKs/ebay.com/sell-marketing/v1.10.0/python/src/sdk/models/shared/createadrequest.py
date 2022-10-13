from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateAdRequest:
    bid_percentage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bidPercentage' }})
    listing_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listingId' }})
    
