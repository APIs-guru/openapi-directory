from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListFinalizedDealsResponse:
    r"""ListFinalizedDealsResponse
    Response message for listing finalized deals.
    """
    
    finalized_deals: Optional[List[FinalizedDeal]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finalizedDeals') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
