from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListDealsResponse:
    r"""ListDealsResponse
    Response message for listing deals in a proposal.
    """
    
    deals: Optional[List[Deal]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deals') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
