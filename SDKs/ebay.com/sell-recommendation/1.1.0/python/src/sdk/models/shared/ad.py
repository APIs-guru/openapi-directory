from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import bidpercentages


@dataclass_json
@dataclass
class Ad:
    bid_percentages: Optional[List[bidpercentages.BidPercentages]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bidPercentages' }})
    promote_with_ad: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promoteWithAd' }})
    
