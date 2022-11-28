from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaListSearchAds360LinksResponse:
    r"""GoogleAnalyticsAdminV1alphaListSearchAds360LinksResponse
    Response message for ListSearchAds360Links RPC.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    search_ads360_links: Optional[List[GoogleAnalyticsAdminV1alphaSearchAds360Link]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchAds360Links') }})
    
