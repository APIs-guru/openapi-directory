from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListCreativeStatusBreakdownByCreativeResponse:
    r"""ListCreativeStatusBreakdownByCreativeResponse
    Response message for listing all creatives associated with a given filtered bid reason.
    """
    
    filtered_bid_creative_rows: Optional[List[FilteredBidCreativeRow]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filteredBidCreativeRows') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
