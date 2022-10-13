from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import carlistingrank


@dataclass_json
@dataclass
class CarRankResponse:
    num_ranked: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'num_ranked' }})
    ranked_listings: Optional[List[carlistingrank.CarListingRank]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ranked_listings' }})
    
