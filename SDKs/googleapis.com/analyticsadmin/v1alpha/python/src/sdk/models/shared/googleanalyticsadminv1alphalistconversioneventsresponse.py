from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaListConversionEventsResponse:
    r"""GoogleAnalyticsAdminV1alphaListConversionEventsResponse
    Response message for ListConversionEvents RPC.
    """
    
    conversion_events: Optional[List[GoogleAnalyticsAdminV1alphaConversionEvent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversionEvents') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
