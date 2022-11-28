from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListListingsResponse:
    r"""ListListingsResponse
    Message for response to the list of Listings.
    """
    
    listings: Optional[List[Listing]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listings') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
