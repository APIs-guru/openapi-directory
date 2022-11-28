from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListBidResponseErrorsResponse:
    r"""ListBidResponseErrorsResponse
    Response message for listing all reasons that bid responses resulted in an error.
    """
    
    callout_status_rows: Optional[List[CalloutStatusRow]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('calloutStatusRows') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
