from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListOrgDataExchangesResponse:
    r"""ListOrgDataExchangesResponse
    Message for response to listing data exchanges in an organization and location.
    """
    
    data_exchanges: Optional[List[DataExchange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataExchanges') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
