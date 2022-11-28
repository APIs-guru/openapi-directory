from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse:
    r"""GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse
    Response message for ListGoogleAdsLinks RPC.
    """
    
    google_ads_links: Optional[List[GoogleAnalyticsAdminV1alphaGoogleAdsLink]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleAdsLinks') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
