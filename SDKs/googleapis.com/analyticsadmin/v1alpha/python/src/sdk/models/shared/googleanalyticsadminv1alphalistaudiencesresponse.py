from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaListAudiencesResponse:
    r"""GoogleAnalyticsAdminV1alphaListAudiencesResponse
    Response message for ListAudiences RPC.
    """
    
    audiences: Optional[List[GoogleAnalyticsAdminV1alphaAudience]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audiences') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
