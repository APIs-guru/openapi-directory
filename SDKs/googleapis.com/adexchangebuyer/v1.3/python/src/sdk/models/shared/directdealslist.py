from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import directdeal


@dataclass_json
@dataclass
class DirectDealsList:
    direct_deals: Optional[List[directdeal.DirectDeal]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directDeals' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
