from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse:
    r"""GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse
    Response message for ListDisplayVideo360AdvertiserLinks RPC.
    """
    
    display_video360_advertiser_links: Optional[List[GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayVideo360AdvertiserLinks') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
