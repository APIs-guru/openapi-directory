from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import filteredbidcreativerow


@dataclass_json
@dataclass
class ListCreativeStatusBreakdownByCreativeResponse:
    filtered_bid_creative_rows: Optional[List[filteredbidcreativerow.FilteredBidCreativeRow]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filteredBidCreativeRows' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
