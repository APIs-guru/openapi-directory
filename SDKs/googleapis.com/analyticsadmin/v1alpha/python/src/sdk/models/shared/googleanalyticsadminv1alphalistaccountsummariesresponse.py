from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaListAccountSummariesResponse:
    r"""GoogleAnalyticsAdminV1alphaListAccountSummariesResponse
    Response message for ListAccountSummaries RPC.
    """
    
    account_summaries: Optional[List[GoogleAnalyticsAdminV1alphaAccountSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountSummaries') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
