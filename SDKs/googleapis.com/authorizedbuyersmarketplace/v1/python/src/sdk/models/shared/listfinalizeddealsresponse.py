from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import finalizeddeal


@dataclass_json
@dataclass
class ListFinalizedDealsResponse:
    finalized_deals: Optional[List[finalizeddeal.FinalizedDeal]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finalizedDeals' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
