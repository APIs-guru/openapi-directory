from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsResponse:
    r"""GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsResponse
    Response message for SearchAccounts RPC.
    """
    
    change_history_events: Optional[List[GoogleAnalyticsAdminV1alphaChangeHistoryEvent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changeHistoryEvents') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
